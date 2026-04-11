"use client";

import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

interface DashboardCardProps {
  title: string;
  value: string;
  description: string;
  icon: LucideIcon;
  accent: string;
  footer?: string;
}

export default function DashboardCard({ title, value, description, icon: Icon, accent, footer }: DashboardCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/80 p-6 shadow-[0_30px_80px_-40px_rgba(15,23,42,0.8)] backdrop-blur-xl transition-all hover:-translate-y-0.5 hover:shadow-[0_30px_120px_-40px_rgba(56,189,248,0.22)]"
    >
      <div className="absolute inset-x-0 top-0 h-2 bg-gradient-to-r from-sky-400 via-violet-500 to-fuchsia-500 opacity-90"></div>
      <div className="flex items-start justify-between gap-4">
        <div>
          <span className="text-xs uppercase tracking-[0.24em] text-slate-400">{title}</span>
          <h3 className="mt-3 text-3xl font-semibold text-white">{value}</h3>
        </div>
        <div className={`inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-white/5 text-${accent}`}> 
          <Icon className="h-6 w-6 text-sky-300" />
        </div>
      </div>

      <p className="mt-4 text-sm leading-6 text-slate-400">{description}</p>

      {footer && <div className="mt-6 text-sm font-medium text-slate-300">{footer}</div>}
    </motion.div>
  );
}
