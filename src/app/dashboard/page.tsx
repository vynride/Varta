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
    title: "Play a Story!",
    author: "",
    coverUrl: "/default-cover.png",
    audioUrl: undefined,
  });

  useEffect(() => {
    fetch("/api/stories")
      .then((res) => res.json())
      .then((data: Story[]) => {
        setStories(data);
      })
      .catch(console.error);
  }, []);

  const playStory = async (story: Story) => {
    const hasValidImage = story.image && story.image.startsWith("data:image");
    const imageUrl = hasValidImage ? story.image : "/default-cover.png";

    setCurrentStory({
      title: story.title,
      author: "Unknown",
      coverUrl: imageUrl,
      audioUrl: undefined,
    });

    try {
      const res = await fetch("/api/murf/stream", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: story.text }),
      });
      const blob = await res.blob();
      const url = URL.createObjectURL(blob);

      setCurrentStory((cs) => ({ ...cs, audioUrl: url }));
    } catch (error) {
      console.error("Error playing story:", error);
    }
  };

  return (
    <div className="grid grid-cols-[250px_1fr] grid-rows-[1fr_auto] h-screen w-screen bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] font-mono text-white overflow-hidden">
      <SidebarProvider>
        <aside className="overflow-y-auto bg-white/5 backdrop-blur-md border-r border-white/10">
          <AppSidebar />
        </aside>
      </SidebarProvider>

      <main className="overflow-y-auto p-6 pb-32">
        <h1 className="text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-400 to-pink-500 drop-shadow-lg mb-6">
          Your Stories
        </h1>

        {stories.length === 0 ? (
          <p className="text-white/70">We ❤️ Stories...</p>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {stories.map((s) => (
              <MusicCard
                key={s._id}
                title={s.title}
                coverUrl={
                  s.image && s.image.startsWith("data:image")
                    ? s.image
                    : "/default-cover.png"
                }
                onSelect={() => playStory(s)}
              />
            ))}
          </div>
        )}
      </main>

      <footer className="col-start-2 z-80">
        <Player
          audioUrl={currentStory.audioUrl}
          title={currentStory.title}
          coverUrl={currentStory.coverUrl}
        />
      </footer>
    </div>
  );
}
