
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { CalendarCheck, Plus, Clock, User } from "lucide-react";
import { useState } from "react";

const students = [
  { id: 1, name: "Arjun Sharma", usn: "1MS21CS001" },
  { id: 2, name: "Priya Kumari", usn: "1MS21CS025" },
  { id: 3, name: "Rohit Verma", usn: "1MS21CS042" },
  { id: 4, name: "Sneha Reddy", usn: "1MS21CS058" }
];

const scheduledSessions = [
  {
    id: 1,
    student: "Arjun Sharma",
    usn: "1MS21CS001",
    date: "2024-06-15",
    time: "10:00 AM",
    subject: "Academic Performance Review",
    notes: "Discuss semester grades and improvement areas",
    status: "upcoming"
  },
  {
    id: 2,
    student: "Priya Kumari",
    usn: "1MS21CS025",
    date: "2024-06-12",
    time: "2:00 PM",
    subject: "Career Guidance",
    notes: "Discussed internship opportunities and career planning",
    status: "completed"
  },
  {
    id: 3,
    student: "Rohit Verma",
    usn: "1MS21CS042",
    date: "2024-06-18",
    time: "11:30 AM",
    subject: "Personal Issues",
    notes: "Address attendance concerns and personal challenges",
    status: "upcoming"
  }
];

const getStatusBadge = (status: string) => {
  switch (status) {
    case "upcoming":
      return <Badge className="bg-blue-500/20 text-blue-300 border-blue-400/30">Upcoming</Badge>;
    case "completed":
      return <Badge className="bg-green-500/20 text-green-300 border-green-400/30">Completed</Badge>;
    default:
      return null;
  }
};

const ScheduleMentoring = () => {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    studentId: "",
    date: "",
    time: "",
    subject: "",
    notes: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Scheduling session:", formData);
    setShowForm(false);
    setFormData({ studentId: "", date: "", time: "", subject: "", notes: "" });
  };

  return (
    <div className="space-y-6 pb-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-yellow-500/20 to-amber-500/20 backdrop-blur-lg rounded-2xl p-6 border border-white/10 glass glow">
        <h1 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">
          <CalendarCheck className="h-6 w-6 text-yellow-400" />
          Schedule Mentoring
        </h1>
        <p className="text-white/70">Schedule one-on-one mentoring sessions with your students.</p>
      </div>

      {/* Add New Session Button */}
      <div className="flex justify-end">
        <Button
          onClick={() => setShowForm(!showForm)}
          className="bg-yellow-500/20 text-yellow-300 hover:bg-yellow-500/30 border-yellow-400/30"
        >
          <Plus className="h-4 w-4 mr-2" />
          Schedule New Session
        </Button>
      </div>

      {/* Add Session Form */}
      {showForm && (
        <Card className="bg-black/30 backdrop-blur-lg border-white/10 glass">
          <CardHeader>
            <CardTitle className="text-white">Schedule New Mentoring Session</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-white/70 text-sm mb-2">Select Student</label>
                <select
                  value={formData.studentId}
                  onChange={(e) => setFormData({ ...formData, studentId: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-md px-3 py-2 text-white"
                  required
                >
                  <option value="">Choose a student...</option>
                  {students.map((student) => (
                    <option key={student.id} value={student.id}>
                      {student.name} ({student.usn})
                    </option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-white/70 text-sm mb-2">Date</label>
                  <Input
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="bg-white/5 border-white/10 text-white"
                    required
                  />
                </div>
                <div>
                  <label className="block text-white/70 text-sm mb-2">Time</label>
                  <Input
                    type="time"
                    value={formData.time}
                    onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                    className="bg-white/5 border-white/10 text-white"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-white/70 text-sm mb-2">Subject/Topic</label>
                <Input
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="e.g., Academic Performance Review, Career Guidance"
                  className="bg-white/5 border-white/10 text-white placeholder:text-white/50"
                  required
                />
              </div>

              <div>
                <label className="block text-white/70 text-sm mb-2">Notes (Optional)</label>
                <Textarea
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="Additional notes or agenda for the session..."
                  className="bg-white/5 border-white/10 text-white placeholder:text-white/50"
                  rows={3}
                />
              </div>

              <div className="flex gap-3">
                <Button
                  type="submit"
                  className="bg-yellow-500/20 text-yellow-300 hover:bg-yellow-500/30 border-yellow-400/30"
                >
                  Schedule Session
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setShowForm(false)}
                  className="bg-white/5 border-white/10 text-white hover:bg-white/10"
                >
                  Cancel
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      )}

      {/* Scheduled Sessions */}
      <Card className="bg-black/30 backdrop-blur-lg border-white/10 glass">
        <CardHeader>
          <CardTitle className="text-white">Scheduled Sessions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {scheduledSessions.map((session) => (
              <div
                key={session.id}
                className="bg-white/5 rounded-lg p-4 border border-white/10 hover:bg-white/10 transition-colors"
              >
                <div className="flex items-start gap-4">
                  <Avatar className="h-10 w-10 border-2 border-white/20">
                    <AvatarFallback className="bg-gradient-to-br from-blue-500 to-purple-600 text-white font-semibold">
                      {session.student.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <div>
                        <h4 className="text-white font-semibold">{session.student}</h4>
                        <p className="text-white/60 text-sm">{session.usn}</p>
                      </div>
                      {getStatusBadge(session.status)}
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3">
                      <div className="flex items-center gap-2 text-white/70">
                        <Clock className="h-4 w-4" />
                        <span className="text-sm">
                          {new Date(session.date).toLocaleDateString()} at {session.time}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-white/70">
                        <User className="h-4 w-4" />
                        <span className="text-sm">{session.subject}</span>
                      </div>
                    </div>
                    
                    {session.notes && (
                      <p className="text-white/60 text-sm bg-white/5 rounded p-2 border border-white/10">
                        {session.notes}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ScheduleMentoring;
