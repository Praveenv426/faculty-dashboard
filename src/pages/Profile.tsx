
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { User } from "lucide-react";

const Profile = () => {
  return (
    <div className="space-y-6 pb-6">
      <div className="bg-gradient-to-r from-gray-500/20 to-slate-500/20 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
        <h1 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">
          <User className="h-6 w-6 text-gray-400" />
          Profile
        </h1>
        <p className="text-white/70">Manage your personal information and account settings.</p>
      </div>

      <Card className="bg-black/30 backdrop-blur-lg border-white/10">
        <CardHeader>
          <CardTitle className="text-white">Coming Soon</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-white/70">Profile management functionality will be implemented here.</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Profile;
