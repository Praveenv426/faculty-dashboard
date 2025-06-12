
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CalendarCheck } from "lucide-react";

const ApplyLeave = () => {
  return (
    <div className="space-y-6 pb-6">
      <div className="bg-gradient-to-r from-teal-500/20 to-cyan-500/20 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
        <h1 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">
          <CalendarCheck className="h-6 w-6 text-teal-400" />
          Apply for Leave
        </h1>
        <p className="text-white/70">Submit your leave application and view your leave history.</p>
      </div>

      <Card className="bg-black/30 backdrop-blur-lg border-white/10">
        <CardHeader>
          <CardTitle className="text-white">Coming Soon</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-white/70">Leave application functionality will be implemented here.</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default ApplyLeave;
