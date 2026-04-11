import { Database } from "lucide-react";

export default function SIEMPage() {
  return (
    <div className="p-6 space-y-6 animate-in fade-in duration-700 max-w-[1800px] mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 glass-card p-6 rounded-2xl">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-slate-900 mb-1">SIEM Integration</h1>
          <p className="text-slate-500 text-xs font-medium">Forwarding security events to external SIEM providers.</p>
        </div>
      </div>

      <div className="glass-card rounded-2xl p-6 max-w-2xl">
        <div className="flex items-center gap-4 mb-6">
          <div className="p-3 bg-sky-50 rounded-xl border border-sky-200">
            <Database className="w-6 h-6 text-sky-600" />
          </div>
          <div>
            <h2 className="text-lg font-bold text-slate-800">Splunk Enterprise</h2>
            <p className="text-sm text-emerald-600 font-medium flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              Connected & Forwarding
            </p>
          </div>
        </div>
        
        <div className="space-y-4">
          <div className="flex justify-between items-center p-3 bg-slate-50 rounded-lg border border-slate-200">
            <span className="text-sm text-slate-500">Events forwarded (24h)</span>
            <span className="text-sm font-bold text-slate-800 font-mono">142,854</span>
          </div>
          <div className="flex justify-between items-center p-3 bg-slate-50 rounded-lg border border-slate-200">
            <span className="text-sm text-slate-500">Avg. Latency</span>
            <span className="text-sm font-bold text-slate-800 font-mono">1.2s</span>
          </div>
        </div>
      </div>
    </div>
  );
}
