import { Home, Library, Search, Sparkle } from "lucide-react";
import Link from "next/link";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

// Menu items.
const items = [
  {
    title: "Home",
    url: "/dashboard",
    icon: Home,
  },
  {
    title: "Search",
    url: "/dashboard/search",
    icon: Search,
  },
  {
    title: "Library",
    url: "/dashboard/library",
    icon: Library,
  },
  {
    title: "Imagine",
    url: "/dashboard/imagine",
    icon: Sparkle,
  },
];

export function AppSidebar() {
  return (
    <Sidebar className="h-screen sticky top-0">
      <SidebarContent className="h-full overflow-y-auto bg-white/5 backdrop-blur-md border-r border-white/10">
        <SidebarGroup>
          <SidebarGroupLabel className="pl-6 pt-8">
            <Link
              href="/"
              className="block text-4xl py-2 font-bold font-mono bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-400 to-pink-500 hover:opacity-90 transition"
            >
              Varta
            </Link>
          </SidebarGroupLabel>

          <SidebarGroupContent className="mt-16">
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title} className="mb-2">
                  <SidebarMenuButton
                    asChild
                    className="text-base font-mono font-semibold text-white/80 hover:text-white transition"
                  >
                    <Link
                      href={item.url}
                      className="flex items-center gap-3 px-4 py-2 rounded-md hover:bg-white/10"
                    >
                      <item.icon className="w-5 h-5" />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
