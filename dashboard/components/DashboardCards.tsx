"use client";

import { useEffect, useState } from "react";
import { Server, Shield, AlertTriangle, Layers, TrendingUp, TrendingDown } from "lucide-react";
import { motion } from "framer-motion";

export default function DashboardCards() {
  const [stats, setStats] = useState({
    totalAccounts: 3,
    activeResources: 25,
    securityScore: 92,
    activeViolations: 0,
  });

  useEffect(() => {
    const fetchStats = async () => {
      const res = await fetch("/api/stats");
      if (res.ok) {
        setStats(await res.json());
      }
    };
    fetchStats();
    const interval = setInterval(fetchStats, 2000);
    return () => clearInterval(interval);
  }, []);

  const cards = [
    { title: "Total Accounts", value: stats.totalAccounts, icon: Layers, color: "text-blue-400", bg: "bg-blue-500/10", trend: "+0%", trendColor: "text-zinc-500" },
    { title: "Active Resources", value: stats.activeResources, icon: Server, color: "text-indigo-400", bg: "bg-indigo-500/10", trend: "+12%", trendColor: "text-emerald-500" },
    { title: "Security Score", value: `${stats.securityScore}%`, icon: Shield, color: stats.securityScore > 80 ? "text-emerald-400" : "text-yellow-400", bg: stats.securityScore > 80 ? "bg-emerald-500/10" : "bg-yellow-500/10", trend: stats.securityScore > 90 ? "+2%" : "-5%", trendColor: stats.securityScore > 90 ? "text-emerald-500" : "text-rose-500" },
    { title: "Active Violations", value: stats.activeViolations, icon: AlertTriangle, color: stats.activeViolations > 0 ? "text-red-400" : "text-zinc-400", bg: stats.activeViolations > 0 ? "bg-red-500/10" : "bg-zinc-500/10", trend: stats.activeViolations > 0 ? "+1" : "0", trendColor: stats.activeViolations > 0 ? "text-rose-500" : "text-zinc-500" },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {cards.map((card, i) => {
        const Icon = card.icon;
        return (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            key={i} 
            className="glass-card rounded-2xl p-6 flex flex-col gap-4 relative overflow-hidden group hover:border-white/20 transition-all duration-300"
          >
            <div className="absolute top-0 right-0 p-3 opacity-10 group-hover:opacity-20 transition-opacity">
              <Icon className="w-16 h-16 -mr-4 -mt-4 rotate-12" />
            </div>
            <div className="flex items-center justify-between relative z-10">
              <div className={`p-2 rounded-lg ${card.bg}`}>
                <Icon className={`w-5 h-5 ${card.color}`} />
              </div>
              <div className={`flex items-center gap-1 text-xs font-medium ${card.trendColor}`}>
                {card.trend.startsWith("+") ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
                {card.trend}
              </div>
            </div>
            <div className="space-y-1 relative z-10">
              <h3 className="text-zinc-400 font-medium text-sm">{card.title}</h3>
              <p className="text-3xl font-bold tracking-tight text-white">{card.value}</p>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}

