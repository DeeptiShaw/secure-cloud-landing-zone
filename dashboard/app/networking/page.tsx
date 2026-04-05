import { Network, Server } from "lucide-react";

export default function NetworkingPage() {
  return (
    <div className="p-6 space-y-6 animate-in fade-in duration-700 max-w-[1800px] mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 glass-card p-6 rounded-2xl">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-slate-900 mb-1">Networking Hub</h1>
          <p className="text-slate-500 text-xs font-medium">Transit Gateway, VPCs, and global network topology.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="glass-card rounded-2xl overflow-hidden p-6 flex flex-col items-center justify-center min-h-[300px]">
          <Network className="w-12 h-12 text-sky-500 mb-4 opacity-80" />
          <h3 className="text-lg font-bold text-slate-800 mb-2">Transit Gateway Overview</h3>
          <p className="text-sm text-slate-500 text-center max-w-sm">All VPCs are securely connected via the central Transit Gateway in the Infrastructure OU.</p>
        </div>
        <div className="glass-card rounded-2xl overflow-hidden p-6 flex flex-col items-center justify-center min-h-[300px]">
          <Server className="w-12 h-12 text-emerald-500 mb-4 opacity-80" />
          <h3 className="text-lg font-bold text-slate-800 mb-2">VPC Flow Logs</h3>
          <p className="text-sm text-slate-500 text-center max-w-sm">Flow logs are enabled globally and forwarded to the central Log Archive account.</p>
        </div>
      </div>
    </div>
  );
}
