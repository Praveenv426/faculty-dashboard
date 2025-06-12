
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  ClipboardCheck, 
  Upload, 
  CalendarCheck, 
  CalendarDays,
  BookOpen,
  Users,
  Bell,
  TrendingUp
} from "lucide-react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const todaysClasses = [
    { subject: "Computer Science", time: "9:00 AM - 10:00 AM", room: "CS-101" },
    { subject: "Data Structures", time: "11:00 AM - 12:00 PM", room: "CS-102" },
    { subject: "Web Development", time: "2:00 PM - 3:00 PM", room: "CS-103" },
  ];

  const pendingTasks = [
    { task: "Upload marks for Mid-term", priority: "high" },
    { task: "Take attendance for CS-101", priority: "medium" },
    { task: "Review leave applications", priority: "low" },
  ];

  return (
    <div className="space-y-6 pb-6">
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
        <h1 className="text-2xl font-bold text-white mb-2">Welcome back, Dr. Smith!</h1>
        <p className="text-white/70">Here's what's happening in your classes today.</p>
      </div>

      {/* Today's Overview */}
      <section>
        <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
          <BookOpen className="h-5 w-5 text-blue-400" />
          Today's Quick Overview
        </h2>
        
        <div className="grid gap-4">
          {/* Classes Today */}
          <Card className="bg-black/30 backdrop-blur-lg border-white/10 hover:bg-black/40 transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <CalendarDays className="h-5 w-5 text-green-400" />
                Classes Today
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {todaysClasses.map((cls, index) => (
                <div key={index} className="flex justify-between items-center p-3 bg-white/5 rounded-lg">
                  <div>
                    <p className="text-white font-medium">{cls.subject}</p>
                    <p className="text-white/70 text-sm">{cls.time}</p>
                  </div>
                  <Badge variant="secondary" className="bg-blue-500/20 text-blue-300">
                    {cls.room}
                  </Badge>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Pending Tasks */}
          <Card className="bg-black/30 backdrop-blur-lg border-white/10 hover:bg-black/40 transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <Bell className="h-5 w-5 text-orange-400" />
                Tasks Pending
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {pendingTasks.map((task, index) => (
                <div key={index} className="flex justify-between items-center p-3 bg-white/5 rounded-lg">
                  <p className="text-white">{task.task}</p>
                  <Badge 
                    variant="secondary" 
                    className={`${
                      task.priority === 'high' ? 'bg-red-500/20 text-red-300' :
                      task.priority === 'medium' ? 'bg-yellow-500/20 text-yellow-300' :
                      'bg-green-500/20 text-green-300'
                    }`}
                  >
                    {task.priority}
                  </Badge>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Quick Stats */}
          <Card className="bg-black/30 backdrop-blur-lg border-white/10 hover:bg-black/40 transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-cyan-400" />
                Quick Stats
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-3 bg-white/5 rounded-lg">
                  <p className="text-2xl font-bold text-white">15</p>
                  <p className="text-white/70 text-sm">Classes This Week</p>
                </div>
                <div className="text-center p-3 bg-white/5 rounded-lg">
                  <p className="text-2xl font-bold text-white">89%</p>
                  <p className="text-white/70 text-sm">Avg Attendance</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Quick Actions */}
      <section>
        <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
          <Users className="h-5 w-5 text-purple-400" />
          Quick Actions
        </h2>
        
        <div className="grid grid-cols-2 gap-4">
          <Link to="/attendance">
            <Button className="w-full h-20 bg-green-500/20 hover:bg-green-500/30 border border-green-400/30 text-white flex flex-col gap-2 transition-all duration-300 hover:scale-105">
              <ClipboardCheck className="h-6 w-6 text-green-400" />
              <span>Take Attendance</span>
            </Button>
          </Link>
          
          <Link to="/upload-marks">
            <Button className="w-full h-20 bg-purple-500/20 hover:bg-purple-500/30 border border-purple-400/30 text-white flex flex-col gap-2 transition-all duration-300 hover:scale-105">
              <Upload className="h-6 w-6 text-purple-400" />
              <span>Upload Marks</span>
            </Button>
          </Link>
          
          <Link to="/apply-leave">
            <Button className="w-full h-20 bg-teal-500/20 hover:bg-teal-500/30 border border-teal-400/30 text-white flex flex-col gap-2 transition-all duration-300 hover:scale-105">
              <CalendarCheck className="h-6 w-6 text-teal-400" />
              <span>Apply Leave</span>
            </Button>
          </Link>
          
          <Link to="/schedule-mentoring">
            <Button className="w-full h-20 bg-yellow-500/20 hover:bg-yellow-500/30 border border-yellow-400/30 text-white flex flex-col gap-2 transition-all duration-300 hover:scale-105">
              <CalendarDays className="h-6 w-6 text-yellow-400" />
              <span>Schedule Mentoring</span>
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
