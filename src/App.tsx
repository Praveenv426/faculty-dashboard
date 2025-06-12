
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SidebarProvider } from "@/components/ui/sidebar";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import Dashboard from "./pages/Dashboard";
import TakeAttendance from "./pages/TakeAttendance";
import UploadMarks from "./pages/UploadMarks";
import ApplyLeave from "./pages/ApplyLeave";
import AttendanceRecords from "./pages/AttendanceRecords";
import Announcements from "./pages/Announcements";
import ProctorStudents from "./pages/ProctorStudents";
import ManageStudentLeave from "./pages/ManageStudentLeave";
import Timetable from "./pages/Timetable";
import Chat from "./pages/Chat";
import Profile from "./pages/Profile";
import ScheduleMentoring from "./pages/ScheduleMentoring";
import GenerateStatistics from "./pages/GenerateStatistics";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <SidebarProvider defaultOpen={false}>
          <Routes>
            <Route path="/" element={<DashboardLayout />}>
              <Route index element={<Dashboard />} />
              <Route path="attendance" element={<TakeAttendance />} />
              <Route path="upload-marks" element={<UploadMarks />} />
              <Route path="apply-leave" element={<ApplyLeave />} />
              <Route path="attendance-records" element={<AttendanceRecords />} />
              <Route path="announcements" element={<Announcements />} />
              <Route path="proctor-students" element={<ProctorStudents />} />
              <Route path="manage-leave" element={<ManageStudentLeave />} />
              <Route path="timetable" element={<Timetable />} />
              <Route path="chat" element={<Chat />} />
              <Route path="profile" element={<Profile />} />
              <Route path="schedule-mentoring" element={<ScheduleMentoring />} />
              <Route path="statistics" element={<GenerateStatistics />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </SidebarProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
