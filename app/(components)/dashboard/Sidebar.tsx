"use client";
import { Calendar, Home, Inbox, Search, Settings } from "lucide-react";
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
    title: "Listings",
    url: "/dashboard/listings",
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

  // Removed 'close' usage as it does not exist on SidebarContextProps
  // const { close } = useSidebar()
  // const pathname = usePathname()

  // const handleClick = () => { 
  //   if (pathname !== item.url) {
  //     close()
  //   }
  // }
  // const { close } = useSidebar();

  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="text-xl">
            Dashboard Menu
          </SidebarGroupLabel>
          <SidebarGroupContent className="my-4">
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem className="py-2" key={item.title}>
                  <SidebarMenuButton
                    asChild
                    className="w-full text-left text-lg font-medium text-gray-700 hover:bg-gray-100 hover:text-black px-4 py-3 rounded-md transition-colors"
                  >
                    <a href={item.url} className="w-full block">
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
