import { Factory, Plus, History, CheckCircle } from "lucide-react";

export default function AccountFactoryPage() {
  const requests = [
    { id: "REQ-001", accountName: "data-science-prod", ou: "Workloads", status: "Provisioned", time: "2 hours ago" },
    { id: "REQ-002", accountName: "marketing-sandbox", ou: "Sandbox", status: "In Progress", time: "15 mins ago" },
    { id: "REQ-003", accountName: "finance-audit", ou: "Security", status: "Pending Approval", time: "Just now" },
  ];

  return (
    <div className="p-6 space-y-6 animate-in fade-in duration-700 max-w-[1800px] mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 glass-card p-6 rounded-2xl">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-slate-900 mb-1">Account Factory</h1>
          <p className="text-slate-500 text-xs font-medium">Standardized AWS account provisioning and vending.</p>
        </div>
        <button className="px-4 py-2 bg-sky-600 hover:bg-sky-700 text-white rounded-lg text-xs font-bold transition-all flex items-center gap-2 shadow-sm">
          <Plus className="w-4 h-4" />
          Vend New Account
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1 space-y-6">
          <div className="glass-card p-6 rounded-2xl">
            <h2 className="text-sm font-bold text-slate-800 mb-4 uppercase tracking-wider flex items-center gap-2">
              <Factory className="w-4 h-4 text-sky-500" />
              Account Baselines
            </h2>
            <div className="space-y-4">
              {['Standard Workload', 'Security Tooling', 'Developer Sandbox'].map((baseline, i) => (
                <div key={i} className="p-4 bg-slate-50 rounded-xl border border-slate-200 flex items-center justify-between">
                  <div>
                    <h3 className="text-xs font-bold text-slate-800">{baseline}</h3>
                    <p className="text-[10px] text-slate-500 mt-1">Pre-configured VPC, IAM, CloudTrail</p>
                  </div>
                  <CheckCircle className="w-4 h-4 text-emerald-500" />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="lg:col-span-2">
          <div className="glass-card rounded-2xl overflow-hidden h-full">
            <div className="p-4 border-b border-slate-200 flex items-center gap-2 bg-slate-50/50">
              <History className="w-4 h-4 text-blue-500" />
              <h2 className="text-xs font-bold text-slate-800 uppercase tracking-wider">Recent Provisioning Requests</h2>
            </div>
            <table className="w-full text-left">
              <thead className="bg-slate-50 border-b border-slate-200">
                <tr>
                  <th className="py-3 px-4 text-[10px] font-bold text-slate-500 uppercase">Request ID</th>
                  <th className="py-3 px-4 text-[10px] font-bold text-slate-500 uppercase">Account Name</th>
                  <th className="py-3 px-4 text-[10px] font-bold text-slate-500 uppercase">Target OU</th>
                  <th className="py-3 px-4 text-[10px] font-bold text-slate-500 uppercase">Status</th>
                  <th className="py-3 px-4 text-[10px] font-bold text-slate-500 uppercase text-right">Time</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-xs">
                {requests.map((req, i) => (
                  <tr key={i} className="hover:bg-slate-50/80">
                    <td className="py-3 px-4 font-mono text-slate-500">{req.id}</td>
                    <td className="py-3 px-4 font-medium text-slate-800">{req.accountName}</td>
                    <td className="py-3 px-4 text-slate-600">{req.ou}</td>
                    <td className="py-3 px-4">
                      <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase border ${
                        req.status === 'Provisioned' ? 'bg-emerald-50 text-emerald-600 border-emerald-200' :
                        req.status === 'In Progress' ? 'bg-blue-50 text-blue-600 border-blue-200' :
                        'bg-amber-50 text-amber-600 border-amber-200'
                      }`}>
                        {req.status}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-right text-slate-500">{req.time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}