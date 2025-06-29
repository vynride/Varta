import axios, { AxiosResponse } from "axios";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { text } = (await req.json()) as { text: string };

    const apiUrl = "https://api.murf.ai/v1/speech/stream";
    const apiKey = process.env.MURF_API_KEY;
    if (!apiKey) {
      throw new Error("MURF_API_KEY is not defined");
    }

    const murfRes: AxiosResponse<ArrayBuffer> = await axios.post(
      apiUrl,
      { text, voiceId: "en-US-natalie" },
      {
        headers: {
          "Content-Type": "application/json",
          "api-key": apiKey,
        },
        responseType: "arraybuffer",
      }
    );

    return new NextResponse(murfRes.data, {
      status: 200,
      headers: {
        "Content-Type": "audio/wav",
        "Cache-Control": "no-cache",
      },
    });
  } catch (error: unknown) {
    const message =
      error instanceof Error ? error.message : String(error);
    console.error("Murf streaming error:", message);

    return NextResponse.json(
      { error: message || "Streaming failed" },
      { status: 500 }
    );
  }
}
