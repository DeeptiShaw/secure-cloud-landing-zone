"use client";

import type { LucideIcon } from "lucide-react";

interface StatsCardProps {
  title: string;
  value: string;
  detail: string;
  icon: LucideIcon;
  accent: string;
}

export default function StatsCard({ title, value, detail, icon: Icon, accent }: StatsCardProps) {
  return (
    <div className="rounded-[1.75rem] border border-white/10 bg-slate-950/70 p-5 shadow-[0_20px_50px_-20px_rgba(15,23,42,0.8)] backdrop-blur-xl transition hover:border-sky-400/30 hover:shadow-[0_24px_60px_-24px_rgba(56,189,248,0.35)]">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-400">{title}</p>
          <p className="mt-3 text-3xl font-semibold text-white">{value}</p>
        </div>
        <div className={`inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-white/5 text-${accent}`}>
          <Icon className="h-5 w-5 text-sky-300" />
        </div>
      </div>
      <p className="mt-4 text-sm leading-6 text-slate-400">{detail}</p>
    </div>
  );
}
