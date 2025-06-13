
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CalendarDays, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const timeSlots = [
  "09:00 - 09:50",
  "09:50 - 10:40", 
  "11:00 - 11:50",
  "11:50 - 12:40",
  "13:30 - 14:20",
  "14:20 - 15:10",
  "15:10 - 16:00"
];

const daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const timetableData = {
  "Monday": [
    { subject: "Data Structures", room: "CS-101", faculty: "Dr. Smith" },
    { subject: "DBMS", room: "CS-102", faculty: "Prof. Johnson" },
    { subject: "Free", room: "", faculty: "" },
    { subject: "Web Tech", room: "CS-103", faculty: "Dr. Brown" },
    { subject: "Lunch Break", room: "", faculty: "" },
    { subject: "Java Programming", room: "CS-104", faculty: "Prof. Davis" },
    { subject: "Tutorial", room: "CS-105", faculty: "Dr. Wilson" }
  ],
  "Tuesday": [
    { subject: "Algorithms", room: "CS-201", faculty: "Dr. Taylor" },
    { subject: "Computer Networks", room: "CS-202", faculty: "Prof. Anderson" },
    { subject: "Free", room: "", faculty: "" },
    { subject: "Software Engineering", room: "CS-203", faculty: "Dr. Miller" },
    { subject: "Lunch Break", room: "", faculty: "" },
    { subject: "Lab - DBMS", room: "Lab-1", faculty: "Prof. Johnson" },
    { subject: "Lab - DBMS", room: "Lab-1", faculty: "Prof. Johnson" }
  ],
  "Wednesday": [
    { subject: "Operating Systems", room: "CS-301", faculty: "Dr. Garcia" },
    { subject: "Compiler Design", room: "CS-302", faculty: "Prof. Martinez" },
    { subject: "Free", room: "", faculty: "" },
    { subject: "Machine Learning", room: "CS-303", faculty: "Dr. Rodriguez" },
    { subject: "Lunch Break", room: "", faculty: "" },
    { subject: "Research Methodology", room: "CS-304", faculty: "Prof. Lee" },
    { subject: "Free", room: "", faculty: "" }
  ],
  "Thursday": [
    { subject: "Data Mining", room: "CS-401", faculty: "Dr. Thompson" },
    { subject: "Cloud Computing", room: "CS-402", faculty: "Prof. White" },
    { subject: "Free", room: "", faculty: "" },
    { subject: "Cyber Security", room: "CS-403", faculty: "Dr. Hall" },
    { subject: "Lunch Break", room: "", faculty: "" },
    { subject: "Lab - Java", room: "Lab-2", faculty: "Prof. Davis" },
    { subject: "Lab - Java", room: "Lab-2", faculty: "Prof. Davis" }
  ],
  "Friday": [
    { subject: "Artificial Intelligence", room: "CS-501", faculty: "Dr. Clark" },
    { subject: "Mobile App Dev", room: "CS-502", faculty: "Prof. Lewis" },
    { subject: "Free", room: "", faculty: "" },
    { subject: "Project Work", room: "CS-503", faculty: "Dr. Walker" },
    { subject: "Lunch Break", room: "", faculty: "" },
    { subject: "Seminar", room: "Auditorium", faculty: "Various" },
    { subject: "Free", room: "", faculty: "" }
  ],
  "Saturday": [
    { subject: "Free", room: "", faculty: "" },
    { subject: "Free", room: "", faculty: "" },
    { subject: "Free", room: "", faculty: "" },
    { subject: "Free", room: "", faculty: "" },
    { subject: "Free", room: "", faculty: "" },
    { subject: "Free", room: "", faculty: "" },
    { subject: "Free", room: "", faculty: "" }
  ]
};

const Timetable = () => {
  const [currentWeek, setCurrentWeek] = useState(0);

  const getSubjectColor = (subject: string) => {
    if (subject === "Free" || subject === "") return "bg-white/5";
    if (subject === "Lunch Break") return "bg-orange-500/20 border-orange-400/30";
    if (subject.includes("Lab")) return "bg-purple-500/20 border-purple-400/30";
    return "bg-blue-500/20 border-blue-400/30";
  };

  return (
    <div className="space-y-6 pb-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-500/20 to-purple-500/20 backdrop-blur-lg rounded-2xl p-6 border border-white/10 glass glow">
        <h1 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">
          <CalendarDays className="h-6 w-6 text-indigo-400" />
          Timetable
        </h1>
        <p className="text-white/70">Your weekly class schedule and upcoming sessions.</p>
      </div>

      {/* Week Navigation */}
      <div className="flex items-center justify-between">
        <Button
          variant="outline"
          size="sm"
          onClick={() => setCurrentWeek(currentWeek - 1)}
          className="bg-white/5 border-white/10 text-white hover:bg-white/10"
        >
          <ChevronLeft className="h-4 w-4 mr-1" />
          Previous Week
        </Button>
        <span className="text-white font-medium">
          Week {currentWeek + 1}
        </span>
        <Button
          variant="outline"
          size="sm"
          onClick={() => setCurrentWeek(currentWeek + 1)}
          className="bg-white/5 border-white/10 text-white hover:bg-white/10"
        >
          Next Week
          <ChevronRight className="h-4 w-4 ml-1" />
        </Button>
      </div>

      {/* Timetable Grid */}
      <Card className="bg-black/30 backdrop-blur-lg border-white/10 glass">
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[800px]">
              {/* Header Row */}
              <thead>
                <tr className="border-b border-white/10">
                  <th className="p-3 text-left font-semibold text-white/70 bg-white/5 w-32">Time</th>
                  {daysOfWeek.map((day) => (
                    <th key={day} className="p-3 text-center font-semibold text-white bg-white/5 border-l border-white/10 min-w-[120px]">
                      {day}
                    </th>
                  ))}
                </tr>
              </thead>

              {/* Time Slot Rows */}
              <tbody>
                {timeSlots.map((timeSlot, timeIndex) => (
                  <tr key={timeSlot} className="border-b border-white/10">
                    <td className="p-3 text-white/70 bg-white/5 font-medium text-sm align-top">
                      {timeSlot}
                    </td>
                    {daysOfWeek.map((day) => {
                      const classData = timetableData[day as keyof typeof timetableData][timeIndex];
                      return (
                        <td key={`${day}-${timeIndex}`} className="border-l border-white/10 p-1 align-top">
                          {classData.subject && classData.subject !== "Free" ? (
                            <div className={`h-full p-2 rounded-lg border ${getSubjectColor(classData.subject)} transition-all hover:glow cursor-pointer min-h-[60px] flex flex-col justify-center`}>
                              <div className="text-white font-medium text-xs mb-1 text-center">{classData.subject}</div>
                              {classData.room && (
                                <div className="text-white/60 text-xs text-center">{classData.room}</div>
                              )}
                              {classData.faculty && (
                                <div className="text-white/50 text-xs mt-1 text-center">{classData.faculty}</div>
                              )}
                            </div>
                          ) : (
                            <div className="h-full p-2 min-h-[60px] rounded-lg bg-white/5"></div>
                          )}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Timetable;
