import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSideBar";
import Player from "@/components/Player";

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
