import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSideBar";
import Player from "@/components/Player";
import { Input } from "@/components/ui/input";

export default function Search() {
  return (
    <div className="flex bg-gradient-to-br from-amber-900 via-blue-900 to-zinc-950 backdrop-blur-3xl">
      <div className="mr-2">
        <SidebarProvider>
          <AppSidebar />
        </SidebarProvider>
      </div>
      <Input className="w-[300px] text-mono mt-10 ml-8 text-zinc-300 border-zinc-900 border-2 selection:border-zinc-700"></Input>
      <div>
        <Player />
      </div>
    </div>
  );
}
