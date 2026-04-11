"use client";

import { useState } from "react";
import { Bell, Search, User, Moon, Sun, ChevronDown } from "lucide-react";
import { useTheme } from "./ThemeProvider";

const notifications = [
  { id: "nt1", title: "Policy breach detected", detail: "S3 bucket policy requires review.", time: "3m ago" },
  { id: "nt2", title: "Deployment success", detail: "Landing zone pipeline finished.", time: "12m ago" },
];

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [open, setOpen] = useState(false);

  return (
    <div className="sticky top-0 z-40 border-b border-white/10 bg-slate-950/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-[1800px] items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <div className="rounded-3xl bg-gradient-to-r from-sky-500 via-violet-500 to-fuchsia-500 p-1 shadow-[0_20px_90px_-60px_rgba(56,189,248,0.75)]">
            <div className="flex h-11 w-11 items-center justify-center rounded-3xl bg-slate-950/90 text-white shadow-inner shadow-white/5">SC</div>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Cloud Security Dashboard</p>
            <h1 className="text-lg font-semibold text-white sm:text-xl">Secure Landing Zone Console</h1>
          </div>
        </div>

        <div className="hidden flex-1 items-center gap-3 md:flex">
          <div className="relative flex w-full max-w-md items-center gap-2 rounded-3xl border border-white/10 bg-slate-900/80 px-4 py-3 text-slate-300 shadow-inner shadow-black/10 focus-within:border-sky-500">
            <Search className="h-4 w-4 text-slate-400" />
            <input
              type="search"
              placeholder="Search resources, policies, logs..."
              className="w-full bg-transparent text-sm text-slate-200 outline-none placeholder:text-slate-500"
            />
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={toggleTheme}
            className="inline-flex h-11 w-11 items-center justify-center rounded-3xl border border-white/10 bg-slate-900/80 text-slate-200 transition hover:border-sky-400/40 hover:text-white"
            aria-label="Toggle theme"
          >
            {theme === "light" ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
          </button>
          <button
            onClick={() => setOpen(!open)}
            className="relative inline-flex h-11 w-11 items-center justify-center rounded-3xl border border-white/10 bg-slate-900/80 text-slate-200 transition hover:border-sky-400/40 hover:text-white"
            aria-label="Notifications"
          >
            <Bell className="h-5 w-5" />
            <span className="absolute -right-0.5 -top-0.5 inline-flex h-3.5 w-3.5 items-center justify-center rounded-full bg-rose-500 text-[10px] font-bold text-white">2</span>
          </button>
          <button className="inline-flex items-center gap-2 rounded-3xl border border-white/10 bg-slate-900/80 px-3 py-2 text-sm text-slate-200 transition hover:border-sky-400/40 hover:text-white">
            <User className="h-4 w-4" />
            <span>Admin</span>
            <ChevronDown className="h-4 w-4" />
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-slate-950/95 px-4 py-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-[1800px] rounded-3xl border border-white/10 bg-slate-900/80 p-4 text-sm text-slate-300 shadow-[0_20px_80px_-50px_rgba(15,23,42,0.8)]">
            <p className="font-semibold text-white">Recent Notifications</p>
            <div className="mt-3 grid gap-3 sm:grid-cols-2">
              {notifications.map(item => (
                <div key={item.id} className="rounded-3xl bg-slate-950/90 p-4 border border-white/5">
                  <p className="font-semibold text-white">{item.title}</p>
                  <p className="mt-2 text-sm text-slate-400">{item.detail}</p>
                  <p className="mt-3 text-xs uppercase tracking-[0.25em] text-slate-500">{item.time}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
