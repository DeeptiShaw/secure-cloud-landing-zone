import { FileLock, ShieldAlert } from "lucide-react";

export default function SCPsPage() {
  const policies = [
    { name: "DenyRootAccountUsage", target: "Root", type: "Custom", effect: "Deny" },
    { name: "RequireVPCForEC2", target: "Workloads", type: "Custom", effect: "Deny" },
    { name: "PreventCloudTrailDisabling", target: "Root", type: "Managed", effect: "Deny" },
    { name: "RestrictRegionsToAPSouth1", target: "Root", type: "Custom", effect: "Deny" },
  ];

  return (
    <div className="p-6 space-y-6 animate-in fade-in duration-700 max-w-[1800px] mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 glass-card p-6 rounded-2xl">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-slate-900 mb-1">Service Control Policies (SCPs)</h1>
          <p className="text-slate-500 text-xs font-medium">Centrally manage permissions across your organization.</p>
        </div>
      </div>

      <div className="glass-card rounded-2xl overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-slate-50 border-b border-slate-200">
            <tr>
              <th className="py-4 px-6 text-xs font-bold text-slate-500 uppercase">Policy Name</th>
              <th className="py-4 px-6 text-xs font-bold text-slate-500 uppercase">Target OU</th>
              <th className="py-4 px-6 text-xs font-bold text-slate-500 uppercase">Type</th>
              <th className="py-4 px-6 text-xs font-bold text-slate-500 uppercase">Effect</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {policies.map((p, i) => (
              <tr key={i} className="hover:bg-slate-50/80 transition-colors">
                <td className="py-4 px-6 text-sm font-medium text-slate-800 flex items-center gap-3">
                  <FileLock className="w-4 h-4 text-rose-500" />
                  {p.name}
                </td>
                <td className="py-4 px-6 text-sm text-slate-600">{p.target}</td>
                <td className="py-4 px-6">
                  <span className={`px-2 py-1 text-[10px] font-bold rounded uppercase border ${p.type === 'Managed' ? 'bg-blue-50 text-blue-600 border-blue-200' : 'bg-indigo-50 text-indigo-600 border-indigo-200'}`}>
                    {p.type}
                  </span>
                </td>
                <td className="py-4 px-6">
                  <span className="flex items-center gap-1.5 text-xs font-bold text-rose-600">
                    <ShieldAlert className="w-3.5 h-3.5" /> {p.effect}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
