import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";

export default function Dashboard() {
  return (
    <div className="bg-gradient-to-br from-amber-400 via-blue-900 to-zinc-950 backdrop-blur-3xl">
      <div>
        <SidebarProvider>
          <AppSidebar />
        </SidebarProvider>
      </div>
    </div>
  );
}
