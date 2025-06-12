
import { Outlet } from "react-router-dom";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/layout/AppSidebar";

export function DashboardLayout() {
  return (
    <div className="flex min-h-screen w-full bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <AppSidebar />
      <div className="flex-1 flex flex-col min-h-screen">
        <header className="h-16 flex items-center justify-between px-4 bg-black/20 backdrop-blur-lg border-b border-white/10 sticky top-0 z-10">
          <SidebarTrigger className="text-white hover:bg-white/10 p-2 rounded-lg transition-colors" />
          <h1 className="text-xl font-bold text-white">Faculty Dashboard</h1>
          <div className="w-10" />
        </header>
        <main className="flex-1 p-4 overflow-auto">
          <div className="max-w-md mx-auto w-full">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}
