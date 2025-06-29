import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSideBar";
import Player from "@/components/Player";
// import { NextResponse } from "next/server";
// import { connectToDatabase } from "@/lib/mongoose";
// import { Story } from "@/models/Story";

// export async function GET() {
//   await connectToDatabase();
//   const stories = await Story.find().sort({ createdAt: -1 });
//   return NextResponse.json(stories);
// }

// const res = await fetch("/api/stories");
// const stories = await res.json();

export default function Library() {
  return (
    <div className="flex bg-gradient-to-br from-amber-900 via-blue-900 to-zinc-950 backdrop-blur-3xl">
      <div className="mr-2">
        <SidebarProvider>
          <AppSidebar />
        </SidebarProvider>
      </div>
      <div></div>
      <div>
        <Player />
      </div>
    </div>
  );
}
