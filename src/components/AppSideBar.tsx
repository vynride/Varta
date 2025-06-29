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
      <SidebarContent className="h-full overflow-y-auto shadow-2xl backdrop-blur-3xl rounded-md">
        <SidebarGroup>
          <SidebarGroupLabel className="pl-6 pt-10">
            <Link
              href="/"
              className="block text-4xl py-2 font-bold font-mono text-zinc-950 hover:text-zinc-900"
            >
              Varta
            </Link>
          </SidebarGroupLabel>
          <SidebarGroupContent className="mt-20">
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem className="mb-4" key={item.title}>
                  <SidebarMenuButton
                    asChild
                    className="text-lg font-mono font-semibold text-zinc-950 hover:text-gray-400"
                  >
                    <Link href={item.url} className="flex items-center gap-2">
                      <item.icon className="mr-1" />
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
