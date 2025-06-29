import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSideBar";
import { Input } from "@/components/ui/input";

export default function Search() {
  return (
    <div className="grid grid-cols-[250px_1fr] h-screen w-screen bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] font-mono text-white overflow-hidden">
      <SidebarProvider>
        <aside className="overflow-y-auto bg-white/5 backdrop-blur-md border-r border-white/10">
          <AppSidebar />
        </aside>
      </SidebarProvider>

      <main className="p-10">
        <h1 className="text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-400 to-pink-500 drop-shadow-lg mb-8">
          Search Stories
        </h1>

        <Input
          placeholder="Search for a story..."
          className="w-full max-w-md text-base px-4 py-3 rounded-lg bg-white/10 border border-white/10 focus:border-pink-500 focus:ring-0 placeholder:text-white/50 text-white transition"
        />
      </main>
    </div>
  );
}
