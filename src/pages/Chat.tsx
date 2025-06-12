
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageCircle } from "lucide-react";

const Chat = () => {
  return (
    <div className="space-y-6 pb-6">
      <div className="bg-gradient-to-r from-blue-500/20 to-indigo-500/20 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
        <h1 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">
          <MessageCircle className="h-6 w-6 text-blue-400" />
          Chat
        </h1>
        <p className="text-white/70">Connect with colleagues and students instantly.</p>
      </div>

      <Card className="bg-black/30 backdrop-blur-lg border-white/10">
        <CardHeader>
          <CardTitle className="text-white">Coming Soon</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-white/70">Chat functionality will be implemented here.</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Chat;
