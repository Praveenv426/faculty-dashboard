
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp } from "lucide-react";

const GenerateStatistics = () => {
  return (
    <div className="space-y-6 pb-6">
      <div className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
        <h1 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">
          <TrendingUp className="h-6 w-6 text-cyan-400" />
          Generate Statistics
        </h1>
        <p className="text-white/70">Comprehensive analytics and reports for academic performance tracking.</p>
      </div>

      <Card className="bg-black/30 backdrop-blur-lg border-white/10">
        <CardHeader>
          <CardTitle className="text-white">Coming Soon</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-white/70">Statistics generation functionality will be implemented here.</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default GenerateStatistics;
