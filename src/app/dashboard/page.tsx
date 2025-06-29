"use client";

import { useEffect, useState } from "react";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSideBar";
import MusicCard from "@/components/MusicCard";
import Player from "@/components/Player";

interface Story {
  _id: string;
  title: string;
  text: string;
  image: string;
}

interface CurrentStory {
  title: string;
  author: string;
  coverUrl?: string;
  audioUrl?: string;
}

export default function Dashboard() {
  const [stories, setStories] = useState<Story[]>([]);
  const [currentStory, setCurrentStory] = useState<CurrentStory>({
    title: "",
    author: "",
    coverUrl: undefined,
    audioUrl: undefined,
  });

  useEffect(() => {
    fetch("/api/stories")
      .then((res) => res.json())
      .then((data: Story[]) => {
        console.log("Fetched stories:", data);
        setStories(data);
      })
      .catch(console.error);
  }, []);

  const playStory = async (story: Story) => {
    setCurrentStory({
      title: story.title,
      author: "Unknown",
      coverUrl: story.image,
      audioUrl: undefined,
    });

    const res = await fetch("/api/murf/stream", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text: story.text }),
    });
    const blob = await res.blob();
    const url = URL.createObjectURL(blob);

    setCurrentStory((cs) => ({ ...cs, audioUrl: url }));
  };

  return (
    <div className="grid grid-cols-[250px_1fr] grid-rows-[1fr_auto] h-screen w-screen bg-gradient-to-br from-amber-900 via-blue-900 to-zinc-950 font-mono text-white overflow-hidden">
      <SidebarProvider>
        <div className="overflow-y-auto bg-white/5 border-r border-white/10">
          <AppSidebar />
        </div>
      </SidebarProvider>

      <main className="overflow-y-auto p-6">
        <h1 className="text-3xl font-bold mb-6">Your Stories</h1>
        {stories.length === 0 ? (
          <p className="text-zinc-900">Loading Stories!</p>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {stories.map((s) => (
              <MusicCard
                key={s._id}
                title={s.title}
                // author="Unknown"
                coverUrl={s.image}
                onSelect={() => playStory(s)}
              />
            ))}
          </div>
        )}
      </main>

      <div className="col-start-2 z-80">
        <Player
          audioUrl={currentStory.audioUrl}
          title={currentStory.title}
          // author={currentStory.author}
          coverUrl={currentStory.coverUrl}
        />
      </div>
    </div>
  );
}
