
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ClipboardCheck } from "lucide-react";

const TakeAttendance = () => {
  return (
    <div className="space-y-6 pb-6">
      <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
        <h1 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">
          <ClipboardCheck className="h-6 w-6 text-green-400" />
          Take Attendance
        </h1>
        <p className="text-white/70">Mark student attendance for today's class.</p>
      </div>

      <Card className="bg-black/30 backdrop-blur-lg border-white/10">
        <CardHeader>
          <CardTitle className="text-white">Coming Soon</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-white/70">Attendance taking functionality will be implemented here.</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default TakeAttendance;
