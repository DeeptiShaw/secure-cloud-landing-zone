"use client";

import { useEffect, useState } from "react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from "recharts";

interface ChartData {
  time: string;
  score: number;
  violations: number;
}

export default function Charts() {
  const generateMockData = (): ChartData[] => {
    const history: ChartData[] = [];
    let score = 92;
    for (let i = 0; i < 15; i++) {
      history.push({
        time: `${String(Math.floor(i / 2) + 10).padStart(2, '0')}:${String((i % 2) * 30).padStart(2, '0')}`,
        score: Math.max(50, Math.min(100, score)),
        violations: Math.floor(Math.random() * 3),
      });
      score += (Math.random() > 0.5 ? 1 : -1) * Math.floor(Math.random() * 3);
    }
    return history;
  };

  const [data, setData] = useState<ChartData[]>(generateMockData);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Simulate real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      setData(prevData => {
        const newData = [...prevData.slice(1)]; // Remove first item
        const lastScore = newData[newData.length - 1]?.score || 92;
        const newScore = Math.max(50, Math.min(100, lastScore + (Math.random() > 0.5 ? 1 : -1) * Math.floor(Math.random() * 2)));
        const now = new Date();
        newData.push({
          time: `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`,
          score: newScore,
          violations: Math.floor(Math.random() * 2),
        });
        return newData;
      });
    }, 30000); // Update every 30 seconds

    return () => clearInterval(interval);
  }, []);

  if (!mounted) {
    return (
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="glass-card rounded-2xl p-6 h-80">
          <div className="h-full rounded-[1.75rem] bg-slate-900/90 p-6">
            <div className="h-6 w-1/3 rounded-full bg-slate-800 mb-4"></div>
            <div className="space-y-3">
              <div className="h-10 rounded-2xl bg-slate-800"></div>
              <div className="h-40 rounded-3xl bg-slate-900/80"></div>
            </div>
          </div>
        </div>
        <div className="glass-card rounded-2xl p-6 h-80">
          <div className="h-full rounded-[1.75rem] bg-slate-900/90 p-6">
            <div className="h-6 w-1/3 rounded-full bg-slate-800 mb-4"></div>
            <div className="space-y-3">
              <div className="h-10 rounded-2xl bg-slate-800"></div>
              <div className="h-40 rounded-3xl bg-slate-900/80"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div className="glass-card rounded-2xl p-6 h-80">
        <h3 className="text-slate-500 font-bold text-xs uppercase tracking-wider mb-6">Security Score Trend</h3>
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient id="colorScore" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#0ea5e9" stopOpacity={0.2} />
                <stop offset="95%" stopColor="#0ea5e9" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" vertical={false} />
            <XAxis dataKey="time" stroke="#94a3b8" fontSize={12} tickLine={false} axisLine={false} />
            <YAxis stroke="#94a3b8" fontSize={12} tickLine={false} axisLine={false} domain={["dataMin - 10", 100]} />
            <Tooltip 
              contentStyle={{ backgroundColor: "#ffffff", border: "1px solid #e2e8f0", borderRadius: "8px", boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)" }}
              itemStyle={{ color: "#0f172a", fontWeight: "bold" }}
            />
            <Area type="monotone" dataKey="score" stroke="#0ea5e9" strokeWidth={3} fillOpacity={1} fill="url(#colorScore)" />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      <div className="glass-card rounded-2xl p-6 h-80">
        <h3 className="text-slate-500 font-bold text-xs uppercase tracking-wider mb-6">Violations Over Time</h3>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" vertical={false} />
            <XAxis dataKey="time" stroke="#94a3b8" fontSize={12} tickLine={false} axisLine={false} />
            <YAxis stroke="#94a3b8" fontSize={12} tickLine={false} axisLine={false} allowDecimals={false} />
            <Tooltip 
              contentStyle={{ backgroundColor: "#ffffff", border: "1px solid #e2e8f0", borderRadius: "8px", boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)" }}
              cursor={{ fill: "#f1f5f9" }}
              itemStyle={{ color: "#e11d48", fontWeight: "bold" }}
            />
            <Bar dataKey="violations" fill="#f43f5e" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
