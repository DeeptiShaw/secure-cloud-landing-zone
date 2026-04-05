"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, ShieldCheck, Shield, FileCheck, Factory, Layers, FileLock, Network, Activity, Target, Database, Key, Tags, Settings } from "lucide-react";
import { cn } from "@/lib/utils";

export function Sidebar() {
  const pathname = usePathname();

  const links = [
    { name: "Overview", href: "/dashboard", icon: LayoutDashboard },
    { name: "Security Posture", href: "/posture", icon: ShieldCheck },
    { name: "Guardrails", href: "/guardrails", icon: Shield },
    { name: "Compliance", href: "/compliance", icon: FileCheck },
    { name: "Account Factory", href: "/factory", icon: Factory },
    { name: "OUs & Accounts", href: "/ous", icon: Layers },
    { name: "SCPs & Policies", href: "/scps", icon: FileLock },
    { name: "Networking", href: "/networking", icon: Network },
    { name: "Audit Trail", href: "/logs", icon: Activity },
    { name: "Threat Detection", href: "/violations", icon: Target, badge: "Live" },
    { name: "SIEM Integration", href: "/siem", icon: Database },
    { name: "IAM & Access", href: "/iam", icon: Key },
    { name: "Data Classification", href: "/data", icon: Tags },
    { name: "Settings", href: "/settings", icon: Settings },
  ];

  return (
    <div className="w-64 glass-panel flex flex-col justify-between h-screen sticky top-0 border-r border-slate-200 bg-white/80">
      <div className="p-4 overflow-y-auto custom-scrollbar h-full">
        <nav className="space-y-0.5">
          {links.map((link) => {
            const Icon = link.icon;
            const isActive = pathname === link.href || (pathname === "/" && link.href === "/dashboard");
            
            return (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "flex items-center justify-between px-3 py-2.5 rounded-lg transition-all duration-300 group",
                  isActive
                    ? "bg-sky-50 text-sky-700 border border-sky-100 shadow-sm"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-50 border border-transparent"
                )}
              >
                <div className="flex items-center gap-3">
                  <Icon className={cn("w-4 h-4 transition-colors", isActive ? "text-sky-600" : "text-slate-400 group-hover:text-slate-600")} />
                  <span className="font-semibold text-xs tracking-wide">{link.name}</span>
                </div>
                {link.badge && (
                  <span className="px-1.5 py-0.5 bg-rose-100 text-rose-600 text-[8px] font-bold rounded uppercase tracking-tighter border border-rose-200">
                    {link.badge}
                  </span>
                )}
              </Link>
            );
          })}
        </nav>
      </div>
    </div>
  );
}

