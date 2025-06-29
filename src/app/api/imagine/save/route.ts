import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongoose";
import { Story } from "@/models/Story";

export async function POST(req: Request) {
  try {
    const { title, text, image } = await req.json();
    await connectToDatabase();

    const newStory = await Story.create({ title, text, image });

    return NextResponse.json({ success: true, id: newStory._id });
  } catch (error) {
    console.error("Failed to save story:", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
