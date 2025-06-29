"use client";

import { useState } from "react";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSideBar";
import Player from "@/components/Player";

import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { toast } from "sonner";
import Image from "next/image";

export default function ImaginePage() {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [image, setImage] = useState<string | null>(null);
  const [thumbnailPrompt, setThumbnailPrompt] = useState("");
  const [loading, setLoading] = useState(false);

  async function generateThumbnail() {
    if (!thumbnailPrompt) {
      return toast.error("Please enter a prompt for the thumbnail.");
    }

    setLoading(true);
    const res = await fetch("/api/imagine/thumbnail", {
      method: "POST",
      body: JSON.stringify({ prompt: thumbnailPrompt }),
      headers: { "Content-Type": "application/json" },
    });
    const data = await res.json();
    setImage(data.dataURI);
    toast.success("Thumbnail generated");
    setLoading(false);
  }

  async function handleSubmit() {
    if (!title || !text || !image) {
      return toast.error("Please fill all fields and generate a thumbnail first.");
    }

    const res = await fetch("/api/imagine/save", {
      method: "POST",
      body: JSON.stringify({ title, text, image }),
      headers: { "Content-Type": "application/json" },
    });

    if (res.ok) {
      toast.success("Story added to library!");
      setTitle("");
      setText("");
      setImage(null);
      setThumbnailPrompt("");
    } else {
      toast.error("Failed to save story.");
    }
  }

  return (
    <div className="flex bg-gradient-to-br from-amber-900 via-blue-900 to-zinc-950 min-h-screen backdrop-blur-3xl">
      <div className="mr-2">
        <SidebarProvider>
          <AppSidebar />
        </SidebarProvider>
      </div>

      <div className="flex-grow flex justify-center items-start pt-4 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-6xl">
          <Card className="bg-transparent">
            <CardHeader>
              <CardTitle className="text-3xl text-white font-bold font-mono">
                Imagine a Story
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 pb-6">
              <Input
                placeholder="Story title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <div className="h-40 overflow-y-auto rounded-md">
                <Textarea
                  placeholder="Write your story..."
                  className="h-full"
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                />
              </div>
              <Input
                placeholder="Prompt for thumbnail image"
                value={thumbnailPrompt}
                onChange={(e) => setThumbnailPrompt(e.target.value)}
              />
              <Button onClick={generateThumbnail} disabled={loading} className="w-full">
                {loading ? "Generating..." : "Generate Thumbnail"}
              </Button>
              <Button onClick={handleSubmit} className="w-full" disabled={loading}>
                Submit Story
              </Button>
            </CardContent>
          </Card>

          <div className="flex flex-col items-center justify-start w-full mt-10 md:mt-0">
            <p className="text-white font-mono text-lg mb-2">Thumbnail Preview</p>
            <div className="w-80 h-80 border border-zinc-700 rounded-xl overflow-hidden shadow-lg bg-zinc-800/20 backdrop-blur-2xl">
              {image ? (
                <Image
                  src={image}
                  alt="Generated thumbnail"
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-zinc-400 text-sm">
                  Thumbnail preview will appear here
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div>
        <Player />
      </div>
    </div>
  );
}
