
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart } from "lucide-react";

const AttendanceRecords = () => {
  return (
    <div className="space-y-6 pb-6">
      <div className="bg-gradient-to-r from-sky-500/20 to-blue-500/20 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
        <h1 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">
          <BarChart className="h-6 w-6 text-sky-400" />
          Attendance Records
        </h1>
        <p className="text-white/70">View your attendance records across all subjects.</p>
      </div>

      <Card className="bg-black/30 backdrop-blur-lg border-white/10">
        <CardHeader>
          <CardTitle className="text-white">Coming Soon</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-white/70">Attendance records functionality will be implemented here.</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default AttendanceRecords;
