import { Layers, ChevronRight, Server } from "lucide-react";

export default function OUsPage() {
  const orgUnits = [
    { name: "Root", accounts: 1, type: "root" },
    { name: "Security", accounts: 2, type: "ou" },
    { name: "Infrastructure", accounts: 3, type: "ou" },
    { name: "Workloads", accounts: 5, type: "ou" },
    { name: "Sandbox", accounts: 1, type: "ou" },
  ];

  return (
    <div className="p-6 space-y-6 animate-in fade-in duration-700 max-w-[1800px] mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 glass-card p-6 rounded-2xl">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-slate-900 mb-1">Organization Units & Accounts</h1>
          <p className="text-slate-500 text-xs font-medium">Manage AWS Organizations hierarchy and member accounts.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1 glass-card rounded-2xl overflow-hidden">
          <div className="p-4 border-b border-slate-200 bg-slate-50/50">
            <h2 className="text-xs font-bold text-slate-800 uppercase tracking-wider flex items-center gap-2">
              <Layers className="w-4 h-4 text-sky-500" />
              OU Structure
            </h2>
          </div>
          <div className="p-4 space-y-1">
            {orgUnits.map((ou, i) => (
              <div key={i} className="flex items-center justify-between p-2 hover:bg-slate-50 rounded-lg cursor-pointer transition-colors group border border-transparent hover:border-slate-200">
                <div className="flex items-center gap-2">
                  {ou.type === 'root' ? <Server className="w-4 h-4 text-emerald-500" /> : <Layers className="w-4 h-4 text-blue-500" />}
                  <span className="text-sm font-medium text-slate-700 group-hover:text-slate-900">{ou.name}</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-xs text-slate-500">{ou.accounts} accounts</span>
                  <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-slate-600" />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-2 glass-card rounded-2xl overflow-hidden">
          <div className="p-4 border-b border-slate-200 bg-slate-50/50">
            <h2 className="text-xs font-bold text-slate-800 uppercase tracking-wider">Member Accounts</h2>
          </div>
          <div className="p-6 flex items-center justify-center text-slate-500 h-64 bg-slate-50/30">
            Select an OU to view its member accounts.
          </div>
        </div>
      </div>
    </div>
  );
}
