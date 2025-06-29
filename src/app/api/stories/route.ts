import { connectToDatabase } from "@/lib/mongoose";
import { Story } from "@/models/Story";
import { NextResponse } from "next/server";

export async function GET() {
  await connectToDatabase();
  const stories = await Story.find().lean();
  return NextResponse.json(stories);
}

export async function POST(req: Request) {
  await connectToDatabase();
  const body = (await req.json()) as {
    title: string;
    text: string;
    image: string;
    audioUrl?: string;
  };

  try {
    const newStory = await Story.create({
      title: body.title,
      text: body.text,
      image: body.image,
      audioUrl: body.audioUrl,
    });
    return NextResponse.json(newStory, { status: 201 });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : String(error);
    return NextResponse.json(
      { message: "Failed to create story", error: message },
      { status: 500 }
    );
  }
}
