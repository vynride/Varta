import { Calendar, Home, Inbox, Search, Settings } from "lucide-react";
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
    url: "#",
    icon: Home,
  },
  {
    title: "Inbox",
    url: "#",
    icon: Inbox,
  },
  {
    title: "Calendar",
    url: "#",
    icon: Calendar,
  },
  {
    title: "Search",
    url: "#",
    icon: Search,
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings,
  },
];

export function AppSidebar() {
  return (
    <Sidebar className="h-screen sticky top-0">
      <SidebarContent className="h-full overflow-y-auto shadow-2xl backdrop-blur-3xl rounded-md">
        <SidebarGroup>
          <SidebarGroupLabel>
            <div className="mt-14">
              <Link
                href="/"
                className="text-4xl ml-5 font-bold font-mono text-zinc-950 hover:text-zinc-950/5"
              >
                Varta
              </Link>
            </div>
          </SidebarGroupLabel>
          <SidebarGroupContent className="pt-20">
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem className="mb-4" key={item.title}>
                  <SidebarMenuButton
                    asChild
                    className="text-lg font-mono font-semibold text-zinc-800 hover:text-zinc-800/80"
                  >
                    <a href={item.url}>
                      <item.icon className="mr-1" />
                      <span>{item.title}</span>
                    </a>
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
