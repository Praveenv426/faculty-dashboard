
import { NavLink, useLocation } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { 
  ClipboardCheck, 
  Upload, 
  CalendarCheck, 
  BarChart, 
  Megaphone, 
  Users, 
  Clipboard, 
  CalendarDays, 
  MessageCircle, 
  User,
  TrendingUp,
  LogOut 
} from "lucide-react";

const menuItems = [
  { title: "Take Attendance", url: "/attendance", icon: ClipboardCheck, color: "text-green-400" },
  { title: "Upload Marks", url: "/upload-marks", icon: Upload, color: "text-purple-400" },
  { title: "Apply Leave", url: "/apply-leave", icon: CalendarCheck, color: "text-teal-400" },
  { title: "Attendance Records", url: "/attendance-records", icon: BarChart, color: "text-sky-400" },
  { title: "Announcements", url: "/announcements", icon: Megaphone, color: "text-pink-400" },
  { title: "Proctor Students", url: "/proctor-students", icon: Users, color: "text-orange-400" },
  { title: "Manage Student Leave", url: "/manage-leave", icon: Clipboard, color: "text-red-400" },
  { title: "Timetable", url: "/timetable", icon: CalendarDays, color: "text-indigo-400" },
  { title: "Chat", url: "/chat", icon: MessageCircle, color: "text-blue-400" },
  { title: "Profile", url: "/profile", icon: User, color: "text-gray-400" },
  { title: "Schedule Mentoring", url: "/schedule-mentoring", icon: CalendarCheck, color: "text-yellow-400" },
  { title: "Generate Statistics", url: "/statistics", icon: TrendingUp, color: "text-cyan-400" },
];

export function AppSidebar() {
  const { open } = useSidebar();
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path || (path === "/" && location.pathname === "/");

  return (
    <Sidebar className="bg-black/30 backdrop-blur-xl border-r border-white/10">
      <SidebarContent className="pt-4">
        <SidebarGroup>
          <SidebarGroupLabel className="text-white/70 font-semibold mb-4">
            Navigation
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-2">
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink
                      to={item.url}
                      className={({ isActive: active }) =>
                        `flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200 ${
                          active || isActive(item.url)
                            ? 'bg-white/10 text-white shadow-lg shadow-blue-500/20 border border-blue-400/30'
                            : 'text-white/70 hover:bg-white/5 hover:text-white'
                        }`
                      }
                    >
                      <item.icon className={`h-5 w-5 ${item.color}`} />
                      {open && <span className="font-medium">{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
              
              <SidebarMenuItem className="mt-8">
                <SidebarMenuButton asChild>
                  <button className="flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200 text-white/50 hover:bg-red-500/10 hover:text-red-400 w-full">
                    <LogOut className="h-5 w-5" />
                    {open && <span className="font-medium">Logout</span>}
                  </button>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
