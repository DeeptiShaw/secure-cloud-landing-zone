"use client";

import { useEffect, useState } from "react";
import { ShieldAlert, ShieldCheck, Clock, ExternalLink } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function ViolationsTable({ limit = undefined }: { limit?: number }) {
  const [violations, setViolations] = useState<any[]>([]);

  useEffect(() => {
    const fetchViolations = async () => {
      const res = await fetch("/api/violations");
      if (res.ok) {
        setViolations(await res.json());
      }
    };
    fetchViolations();
    const interval = setInterval(fetchViolations, 2000);
    return () => clearInterval(interval);
  }, []);

  const displayViolations = limit ? violations.slice(0, limit) : violations;

  const severityColor = (sev: string) => {
    switch (sev) {
      case "High": return "bg-rose-50 text-rose-600 border-rose-200 shadow-sm";
      case "Medium": return "bg-amber-50 text-amber-600 border-amber-200";
      default: return "bg-blue-50 text-blue-600 border-blue-200";
    }
  };

  const statusColor = (status: string) => {
    return status === "Auto-Fixed"
      ? "text-emerald-600 bg-emerald-50 border-emerald-200"
      : "text-rose-600 bg-rose-50 border-rose-200 animate-pulse";
  };

  return (
    <div className="glass-card rounded-2xl overflow-hidden flex flex-col h-full">
      <div className="p-6 border-b border-slate-200 flex justify-between items-center bg-slate-50/50">
        <div>
          <h3 className="font-semibold text-lg text-slate-800">Security Violations</h3>
          <p className="text-slate-500 text-xs">Real-time threat detection feed</p>
        </div>
        <span className="px-3 py-1 bg-white rounded-full text-slate-600 text-xs font-medium border border-slate-200 shadow-sm">
          {violations.length} total
        </span>
      </div>
      <div className="overflow-x-auto flex-1 bg-white/50">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-slate-200 bg-slate-50/80">
              <th className="py-4 px-6 text-xs font-bold text-slate-500 uppercase tracking-wider">Type</th>
              <th className="py-4 px-6 text-xs font-bold text-slate-500 uppercase tracking-wider">Severity</th>
              <th className="py-4 px-6 text-xs font-bold text-slate-500 uppercase tracking-wider">Status</th>
              <th className="py-4 px-6 text-xs font-bold text-slate-500 uppercase tracking-wider text-right">Time</th>
            </tr>
          </thead>
          <tbody>
            <AnimatePresence initial={false}>
              {displayViolations.length === 0 ? (
                <motion.tr 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <td colSpan={4} className="py-12 text-center text-slate-500">
                    <div className="flex flex-col items-center gap-2">
                      <div className="p-3 bg-emerald-50 rounded-full">
                        <ShieldCheck className="w-8 h-8 text-emerald-500" />
                      </div>
                      <p className="font-medium text-slate-700">No violations detected</p>
                      <p className="text-xs">Your landing zone is secure</p>
                    </div>
                  </td>
                </motion.tr>
              ) : (
                displayViolations.map((v) => (
                  <motion.tr 
                    layout
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    key={v.id} 
                    className="border-b border-slate-100 hover:bg-slate-50/80 transition-colors group"
                  >
                    <td className="py-4 px-6 font-medium text-slate-700">
                      <div className="flex items-center gap-3">
                        <div className={`p-1.5 rounded-md ${v.status === 'Detected' ? 'bg-rose-100' : 'bg-slate-100'}`}>
                          <ShieldAlert className={`w-4 h-4 ${v.status === 'Detected' ? 'text-rose-600' : 'text-slate-500'}`} />
                        </div>
                        <span className="group-hover:text-slate-900 transition-colors">{v.type}</span>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold border tracking-wider uppercase ${severityColor(v.severity)}`}>
                        {v.severity}
                      </span>
                    </td>
                    <td className="py-4 px-6">
                      <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold border flex items-center gap-1.5 w-max tracking-wider uppercase ${statusColor(v.status)}`}>
                        {v.status === "Auto-Fixed" ? <ShieldCheck className="w-3 h-3" /> : <Clock className="w-3 h-3" />}
                        {v.status}
                      </span>
                    </td>
                    <td className="py-4 px-6 text-xs text-slate-500 text-right font-mono">
                      <div className="flex items-center justify-end gap-2 group-hover:text-slate-700 transition-colors">
                        {new Date(v.timestamp).toLocaleTimeString()}
                        <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                    </td>
                  </motion.tr>
                ))
              )}
            </AnimatePresence>
          </tbody>
        </table>
      </div>
    </div>
  );
}

