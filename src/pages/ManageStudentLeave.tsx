
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Clipboard } from "lucide-react";

const ManageStudentLeave = () => {
  return (
    <div className="space-y-6 pb-6">
      <div className="bg-gradient-to-r from-red-500/20 to-pink-500/20 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
        <h1 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">
          <Clipboard className="h-6 w-6 text-red-400" />
          Manage Student Leave
        </h1>
        <p className="text-white/70">Review and approve student leave applications.</p>
      </div>

      <Card className="bg-black/30 backdrop-blur-lg border-white/10">
        <CardHeader>
          <CardTitle className="text-white">Coming Soon</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-white/70">Student leave management functionality will be implemented here.</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default ManageStudentLeave;
