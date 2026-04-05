"use client";

import { useState } from "react";
import { toast } from "sonner";
import { Siren, ShieldCheck, Loader2 } from "lucide-react";
import { motion } from "framer-motion";

export default function AttackButton() {
  const [isAttacking, setIsAttacking] = useState(false);

  const simulateAttack = async () => {
    setIsAttacking(true);
    
    // Initial Detection Toast
    const toastId = toast.custom((t) => (
      <div className="bg-white border border-rose-200 p-4 rounded-xl shadow-xl flex items-start gap-3 min-w-[320px] animate-in slide-in-from-right-full">
        <div className="p-2 bg-rose-100 rounded-lg">
          <Siren className="w-5 h-5 text-rose-600 animate-pulse" />
        </div>
        <div className="flex-1">
          <h4 className="text-sm font-bold text-rose-700">Security Violation Detected</h4>
          <p className="text-xs text-slate-500 mt-1">Analyzing threat vector and impact...</p>
          <div className="w-full bg-slate-100 h-1 mt-3 rounded-full overflow-hidden">
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 3 }}
              className="bg-rose-500 h-full"
            />
          </div>
        </div>
      </div>
    ), { duration: 3000 });

    try {
      const res = await fetch("/api/simulate", { method: "POST" });
      const data = await res.json();
      
      if (res.ok) {
        // Wait for analysis
        setTimeout(async () => {
          toast.dismiss(toastId);
          
          // Remediation Toast
          toast.custom((t) => (
            <div className="bg-white border border-emerald-200 p-4 rounded-xl shadow-xl flex items-start gap-3 min-w-[320px] animate-in slide-in-from-right-full">
              <div className="p-2 bg-emerald-100 rounded-lg">
                <ShieldCheck className="w-5 h-5 text-emerald-600" />
              </div>
              <div className="flex-1">
                <h4 className="text-sm font-bold text-emerald-700">Auto-Remediation Successful</h4>
                <p className="text-xs text-slate-500 mt-1">Lambda fixed: {data.violation.type}</p>
                <div className="flex gap-2 mt-2">
                  <span className="px-1.5 py-0.5 bg-emerald-50 text-emerald-600 text-[8px] font-bold rounded uppercase border border-emerald-200">Fixed</span>
                  <span className="px-1.5 py-0.5 bg-slate-100 text-slate-600 text-[8px] font-bold rounded uppercase border border-slate-200">Audit Logged</span>
                </div>
              </div>
            </div>
          ), { duration: 4000 });

          // Update the violation to fixed
          await fetch("/api/violations", {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ id: data.violation.id, status: "Auto-Fixed" })
          });
          
          setIsAttacking(false);
        }, 3000);
      }
    } catch (error) {
      console.error(error);
      toast.error("Simulation failed");
      setIsAttacking(false);
    }
  };

  return (
    <div className="relative group">
      <div className={`absolute -inset-0.5 bg-gradient-to-r ${isAttacking ? 'from-rose-400 to-rose-500' : 'from-sky-400 to-indigo-500'} rounded-lg blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200 animate-pulse`}></div>
      <button
        onClick={simulateAttack}
        disabled={isAttacking}
        className={`
          relative w-full overflow-hidden rounded-lg font-bold text-[10px] sm:text-xs uppercase tracking-widest px-3 py-2
          transition-all duration-300 transform active:scale-[0.98]
          flex items-center justify-center gap-2
          border shadow-sm
          ${isAttacking 
            ? "bg-rose-50 text-rose-700 border-rose-200 cursor-not-allowed" 
            : "bg-white text-slate-700 border-slate-200 hover:border-rose-300 hover:text-rose-600"}
        `}
      >
        {isAttacking ? (
          <>
            <Loader2 className="w-3.5 h-3.5 animate-spin" />
            <span>Intercepting...</span>
          </>
        ) : (
          <>
            <Siren className="w-3.5 h-3.5" />
            <span>Simulate Attack</span>
          </>
        )}
      </button>
    </div>
  );
}

