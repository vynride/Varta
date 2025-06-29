"use client";

import { useEffect, useState } from "react";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSideBar";

interface Story {
  _id: string;
  title: string;
  text: string;
  image: string;
  createdAt?: string;
}

export default function Library() {
  const [stories, setStories] = useState<Story[]>([]);

  useEffect(() => {
    fetch("/api/stories")
      .then((res) => res.json())
      .then((data: Story[]) => setStories(data))
      .catch(console.error);
  }, []);

  return (
    <div className="grid grid-cols-[250px_1fr] grid-rows-[1fr] h-screen w-screen bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] font-mono text-white overflow-hidden">
      <SidebarProvider>
        <aside className="overflow-y-auto bg-white/5 backdrop-blur-md border-r border-white/10">
          <AppSidebar />
        </aside>
      </SidebarProvider>

      <main className="p-6 overflow-y-auto">
        <h1 className="text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-400 to-pink-500 drop-shadow-lg mb-6">
          Story Library
        </h1>

        {stories.length === 0 ? (
          <p className="text-white/70">Loading stories...</p>
        ) : (
          <div className="rounded-2xl overflow-hidden shadow-lg ring-1 ring-white/10 backdrop-blur-2xl bg-white/5">
            <table className="min-w-full divide-y divide-white/10">
              <thead>
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider text-white/60">
                    Cover
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider text-white/60">
                    Title
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider text-white/60">
                    Created At
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10">
                {stories.map((story) => (
                  <tr key={story._id} className="hover:bg-white/5 transition">
                    <td className="px-6 py-4">
                      <img
                        src={
                          story.image && story.image.startsWith("data:image")
                            ? story.image
                            : "/default-cover.png"
                        }
                        alt={story.title}
                        className="h-16 w-16 rounded object-cover ring-1 ring-white/10"
                      />
                    </td>
                    <td className="px-6 py-4">
                      <p className="font-semibold">{story.title}</p>
                    </td>
                    <td className="px-6 py-4 text-sm text-white/70">
                      {story.createdAt
                        ? new Date(story.createdAt).toLocaleDateString()
                        : "Unknown"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </main>
    </div>
  );
}
