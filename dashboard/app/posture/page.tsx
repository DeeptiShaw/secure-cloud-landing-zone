import { ShieldCheck, TrendingUp, AlertTriangle } from "lucide-react";
import Charts from "@/components/Charts";

export default function SecurityPosturePage() {
  return (
    <div className="p-6 space-y-6 animate-in fade-in duration-700 max-w-[1800px] mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 glass-card p-6 rounded-2xl">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-slate-900 mb-1">Security Posture</h1>
          <p className="text-slate-500 text-xs font-medium">Deep dive into your organizational security metrics.</p>
        </div>
        <div className="px-4 py-2 bg-emerald-50 border border-emerald-200 rounded-xl flex items-center gap-3 shadow-sm">
          <ShieldCheck className="w-5 h-5 text-emerald-600" />
          <span className="text-sm font-bold text-emerald-700">Score: 92/100</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { title: "Identity & Access", score: "88%", issues: 2, icon: AlertTriangle, color: "text-amber-600", bg: "bg-amber-50", border: "border-amber-200" },
          { title: "Data Protection", score: "95%", issues: 0, icon: ShieldCheck, color: "text-emerald-600", bg: "bg-emerald-50", border: "border-emerald-200" },
          { title: "Infrastructure", score: "92%", issues: 1, icon: TrendingUp, color: "text-sky-600", bg: "bg-sky-50", border: "border-sky-200" },
        ].map((cat, i) => {
          const Icon = cat.icon;
          return (
            <div key={i} className="glass-card p-6 rounded-2xl">
              <div className="flex justify-between items-start mb-4">
                <div className={`p-2 rounded-lg ${cat.bg} ${cat.border} border shadow-sm`}>
                  <Icon className={`w-5 h-5 ${cat.color}`} />
                </div>
                <span className="text-2xl font-bold text-slate-900">{cat.score}</span>
              </div>
              <h3 className="text-sm font-bold text-slate-800">{cat.title}</h3>
              <p className="text-xs text-slate-500 mt-1">{cat.issues} active findings</p>
            </div>
          )
        })}
      </div>

      <Charts />
    </div>
  );
}
