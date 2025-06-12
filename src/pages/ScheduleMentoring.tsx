
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CalendarCheck } from "lucide-react";

const ScheduleMentoring = () => {
  return (
    <div className="space-y-6 pb-6">
      <div className="bg-gradient-to-r from-yellow-500/20 to-amber-500/20 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
        <h1 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">
          <CalendarCheck className="h-6 w-6 text-yellow-400" />
          Schedule Mentoring
        </h1>
        <p className="text-white/70">Schedule one-on-one mentoring sessions with your students.</p>
      </div>

      <Card className="bg-black/30 backdrop-blur-lg border-white/10">
        <CardHeader>
          <CardTitle className="text-white">Coming Soon</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-white/70">Mentoring scheduling functionality will be implemented here.</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default ScheduleMentoring;
