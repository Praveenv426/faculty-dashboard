
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CalendarCheck, Calendar, Clock, CheckCircle, XCircle, AlertCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ApplyLeave = () => {
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState<"apply" | "history">("apply");
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const [leaveForm, setLeaveForm] = useState({
    fromDate: "",
    toDate: "",
    leaveType: "",
    reason: "",
  });

  const leaveTypes = [
    "Sick Leave",
    "Casual Leave",
    "Personal Leave",
    "Emergency Leave",
    "Maternity/Paternity Leave",
    "Academic Leave",
  ];

  const leaveHistory = [
    {
      id: "1",
      fromDate: "2024-01-15",
      toDate: "2024-01-17",
      type: "Sick Leave",
      reason: "Flu and fever",
      status: "approved",
      appliedDate: "2024-01-12",
      approvedBy: "Dr. Johnson",
      days: 3,
    },
    {
      id: "2",
      fromDate: "2024-02-20",
      toDate: "2024-02-22",
      type: "Personal Leave",
      reason: "Family function",
      status: "pending",
      appliedDate: "2024-02-18",
      days: 3,
    },
    {
      id: "3",
      fromDate: "2024-03-10",
      toDate: "2024-03-10",
      type: "Emergency Leave",
      reason: "Medical emergency",
      status: "rejected",
      appliedDate: "2024-03-09",
      rejectedBy: "Dr. Smith",
      rejectionReason: "Insufficient notice period",
      days: 1,
    },
    {
      id: "4",
      fromDate: "2024-04-05",
      toDate: "2024-04-07",
      type: "Casual Leave",
      reason: "Personal work",
      status: "approved",
      appliedDate: "2024-04-01",
      approvedBy: "Dr. Johnson",
      days: 3,
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'approved': return 'bg-green-500/20 text-green-300 border-green-400/30';
      case 'pending': return 'bg-yellow-500/20 text-yellow-300 border-yellow-400/30';
      case 'rejected': return 'bg-red-500/20 text-red-300 border-red-400/30';
      default: return 'bg-gray-500/20 text-gray-300 border-gray-400/30';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'approved': return <CheckCircle className="h-4 w-4" />;
      case 'pending': return <Clock className="h-4 w-4" />;
      case 'rejected': return <XCircle className="h-4 w-4" />;
      default: return <AlertCircle className="h-4 w-4" />;
    }
  };

  const calculateDays = (from: string, to: string) => {
    if (!from || !to) return 0;
    const fromDate = new Date(from);
    const toDate = new Date(to);
    const diffTime = Math.abs(toDate.getTime() - fromDate.getTime());
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24)) + 1;
  };

  const handleSubmit = async () => {
    if (!leaveForm.fromDate || !leaveForm.toDate || !leaveForm.leaveType || !leaveForm.reason.trim()) {
      toast({
        title: "Error",
        description: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }

    if (new Date(leaveForm.fromDate) > new Date(leaveForm.toDate)) {
      toast({
        title: "Error",
        description: "From date cannot be later than to date",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    const days = calculateDays(leaveForm.fromDate, leaveForm.toDate);
    
    toast({
      title: "Leave Application Submitted",
      description: `Your leave application for ${days} day(s) has been submitted for review`,
    });
    
    setLeaveForm({
      fromDate: "",
      toDate: "",
      leaveType: "",
      reason: "",
    });
    
    setIsSubmitting(false);
  };

  const leaveStats = {
    totalApplied: leaveHistory.length,
    approved: leaveHistory.filter(l => l.status === 'approved').length,
    pending: leaveHistory.filter(l => l.status === 'pending').length,
    rejected: leaveHistory.filter(l => l.status === 'rejected').length,
    totalDays: leaveHistory.filter(l => l.status === 'approved').reduce((sum, l) => sum + l.days, 0),
  };

  return (
    <div className="space-y-6 pb-6">
      <div className="bg-gradient-to-r from-teal-500/20 to-cyan-500/20 backdrop-blur-lg rounded-2xl p-6 border border-white/10 shadow-lg shadow-teal-500/10">
        <h1 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">
          <CalendarCheck className="h-6 w-6 text-teal-400" />
          Apply for Leave
        </h1>
        <p className="text-white/70">Submit your leave application and view your leave history.</p>
      </div>

      {/* Tab Navigation */}
      <Card className="bg-black/30 backdrop-blur-lg border-white/10 shadow-lg">
        <CardContent className="p-1">
          <div className="flex bg-white/5 rounded-lg p-1">
            <button
              onClick={() => setActiveTab("apply")}
              className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all ${
                activeTab === "apply"
                  ? "bg-teal-500 text-white shadow-lg"
                  : "text-white/70 hover:text-white hover:bg-white/10"
              }`}
            >
              Apply Leave
            </button>
            <button
              onClick={() => setActiveTab("history")}
              className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all ${
                activeTab === "history"
                  ? "bg-teal-500 text-white shadow-lg"
                  : "text-white/70 hover:text-white hover:bg-white/10"
              }`}
            >
              Leave History
            </button>
          </div>
        </CardContent>
      </Card>

      {activeTab === "apply" && (
        <>
          {/* Leave Application Form */}
          <Card className="bg-black/30 backdrop-blur-lg border-white/10 shadow-lg">
            <CardHeader>
              <CardTitle className="text-white">Leave Application</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-white/70 text-sm mb-2 block flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    From Date
                  </label>
                  <input
                    type="date"
                    value={leaveForm.fromDate}
                    onChange={(e) => setLeaveForm(prev => ({ ...prev, fromDate: e.target.value }))}
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full p-3 bg-white/5 border border-white/20 rounded-lg text-white focus:ring-2 focus:ring-teal-400 focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label className="text-white/70 text-sm mb-2 block flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    To Date
                  </label>
                  <input
                    type="date"
                    value={leaveForm.toDate}
                    onChange={(e) => setLeaveForm(prev => ({ ...prev, toDate: e.target.value }))}
                    min={leaveForm.fromDate || new Date().toISOString().split('T')[0]}
                    className="w-full p-3 bg-white/5 border border-white/20 rounded-lg text-white focus:ring-2 focus:ring-teal-400 focus:border-transparent"
                  />
                </div>
              </div>

              {leaveForm.fromDate && leaveForm.toDate && (
                <div className="p-3 bg-teal-500/10 rounded-lg border border-teal-400/20">
                  <p className="text-teal-400 text-sm">
                    Duration: <span className="font-bold">{calculateDays(leaveForm.fromDate, leaveForm.toDate)} day(s)</span>
                  </p>
                </div>
              )}

              <div>
                <label className="text-white/70 text-sm mb-2 block">Leave Type</label>
                <Select value={leaveForm.leaveType} onValueChange={(value) => setLeaveForm(prev => ({ ...prev, leaveType: value }))}>
                  <SelectTrigger className="bg-white/5 border-white/20 text-white">
                    <SelectValue placeholder="Select leave type" />
                  </SelectTrigger>
                  <SelectContent>
                    {leaveTypes.map((type) => (
                      <SelectItem key={type} value={type}>
                        {type}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="text-white/70 text-sm mb-2 block">Reason</label>
                <Textarea
                  value={leaveForm.reason}
                  onChange={(e) => setLeaveForm(prev => ({ ...prev, reason: e.target.value }))}
                  placeholder="Please provide a detailed reason for your leave..."
                  className="bg-white/5 border-white/20 text-white resize-none focus:ring-2 focus:ring-teal-400 focus:border-transparent"
                  rows={4}
                />
              </div>
            </CardContent>
          </Card>

          {/* Submit Button */}
          <Button
            onClick={handleSubmit}
            disabled={isSubmitting}
            className="w-full h-12 bg-teal-500 hover:bg-teal-600 text-white font-semibold text-lg shadow-lg shadow-teal-500/20"
          >
            {isSubmitting ? (
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                Submitting Application...
              </div>
            ) : (
              'Submit Leave Application'
            )}
          </Button>
        </>
      )}

      {activeTab === "history" && (
        <>
          {/* Leave Statistics */}
          <Card className="bg-black/30 backdrop-blur-lg border-white/10 shadow-lg">
            <CardHeader>
              <CardTitle className="text-white">Leave Statistics</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-3 bg-blue-500/10 rounded-lg border border-blue-400/20">
                  <p className="text-2xl font-bold text-blue-400">{leaveStats.totalApplied}</p>
                  <p className="text-white/70 text-sm">Total Applied</p>
                </div>
                <div className="text-center p-3 bg-green-500/10 rounded-lg border border-green-400/20">
                  <p className="text-2xl font-bold text-green-400">{leaveStats.approved}</p>
                  <p className="text-white/70 text-sm">Approved</p>
                </div>
                <div className="text-center p-3 bg-yellow-500/10 rounded-lg border border-yellow-400/20">
                  <p className="text-2xl font-bold text-yellow-400">{leaveStats.pending}</p>
                  <p className="text-white/70 text-sm">Pending</p>
                </div>
                <div className="text-center p-3 bg-purple-500/10 rounded-lg border border-purple-400/20">
                  <p className="text-2xl font-bold text-purple-400">{leaveStats.totalDays}</p>
                  <p className="text-white/70 text-sm">Days Taken</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Leave History */}
          <Card className="bg-black/30 backdrop-blur-lg border-white/10 shadow-lg">
            <CardHeader>
              <CardTitle className="text-white">Recent Applications</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {leaveHistory.map((leave) => (
                  <div key={leave.id} className="p-4 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 transition-colors">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h3 className="text-white font-medium">{leave.type}</h3>
                        <p className="text-white/60 text-sm flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          {new Date(leave.fromDate).toLocaleDateString()} - {new Date(leave.toDate).toLocaleDateString()}
                        </p>
                      </div>
                      <Badge className={getStatusColor(leave.status)}>
                        {getStatusIcon(leave.status)}
                        <span className="ml-1 capitalize">{leave.status}</span>
                      </Badge>
                    </div>
                    
                    <p className="text-white/80 text-sm mb-3">{leave.reason}</p>
                    
                    <div className="flex justify-between items-center text-xs text-white/60">
                      <span>Applied: {new Date(leave.appliedDate).toLocaleDateString()}</span>
                      <span>{leave.days} day(s)</span>
                    </div>
                    
                    {leave.status === 'approved' && leave.approvedBy && (
                      <div className="mt-2 p-2 bg-green-500/10 rounded border border-green-400/20">
                        <p className="text-green-400 text-xs">Approved by: {leave.approvedBy}</p>
                      </div>
                    )}
                    
                    {leave.status === 'rejected' && leave.rejectedBy && (
                      <div className="mt-2 p-2 bg-red-500/10 rounded border border-red-400/20">
                        <p className="text-red-400 text-xs">Rejected by: {leave.rejectedBy}</p>
                        {leave.rejectionReason && (
                          <p className="text-red-300 text-xs mt-1">Reason: {leave.rejectionReason}</p>
                        )}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </>
      )}
    </div>
  );
};

export default ApplyLeave;
