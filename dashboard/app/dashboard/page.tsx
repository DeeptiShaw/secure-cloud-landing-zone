"use client";

import { Shield, Server, FileCheck, Layers, Play, Download, Cloud, Settings, GitCommit, Network } from "lucide-react";
import AttackButton from "@/components/AttackButton";
import LogsPanel from "@/components/LogsPanel";
import { motion } from "framer-motion";
import { toast } from "sonner";

export default function DashboardPage() {
  const handleRunAssessment = () => {
    toast.success("Security Assessment Started", {
      description: "Evaluating 247 resources against 5 active frameworks. This may take a few minutes.",
    });
  };

  const handleExportReport = () => {
    toast.info("Report Generation Initiated", {
      description: "Your PDF report will be ready to download shortly.",
    });
  };

  return (
    <div className="p-6 space-y-6 animate-in fade-in duration-700 max-w-[1800px] mx-auto">
      {/* HERO SUMMARY */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 glass-card p-6 rounded-2xl">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-slate-900 mb-1">Security Posture Overview</h1>
          <p className="text-slate-500 text-xs font-medium flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
            Last evaluated · 2 minutes ago · 247 resources across 12 accounts
          </p>
        </div>
        <div className="flex gap-3">
          <button 
            onClick={handleRunAssessment}
            className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-lg text-xs font-bold transition-all flex items-center gap-2 shadow-sm active:scale-95"
          >
            <Play className="w-3.5 h-3.5" />
            Run Assessment
          </button>
          <button 
            onClick={handleExportReport}
            className="px-4 py-2 bg-sky-50 hover:bg-sky-100 text-sky-700 border border-sky-200 rounded-lg text-xs font-bold transition-all flex items-center gap-2 shadow-sm active:scale-95"
          >
            <Download className="w-3.5 h-3.5" />
            Export Report
          </button>
          <div className="w-40">
            <AttackButton />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {[
          { label: "Security Score", value: "92%", trend: "+2%", color: "text-emerald-600", bg: "bg-emerald-50", border: "border-emerald-100" },
          { label: "Resources Protected", value: "247", trend: "+12", color: "text-sky-600", bg: "bg-sky-50", border: "border-sky-100" },
          { label: "Open Findings", value: "3", trend: "-1", color: "text-rose-600", bg: "bg-rose-50", border: "border-rose-100" },
          { label: "Guardrail Coverage", value: "100%", trend: "0%", color: "text-indigo-600", bg: "bg-indigo-50", border: "border-indigo-100" },
          { label: "Frameworks Active", value: "5", trend: "0", color: "text-amber-600", bg: "bg-amber-50", border: "border-amber-100" },
        ].map((stat, i) => (
          <div key={i} className={`p-4 rounded-xl border flex flex-col gap-1 ${stat.bg} ${stat.border}`}>
            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">{stat.label}</span>
            <div className="flex items-end gap-2">
              <span className={`text-2xl font-bold ${stat.color}`}>{stat.value}</span>
              <span className="text-[10px] text-slate-500 mb-1">{stat.trend}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-12 gap-6">
        {/* SECTION 1: GUARDRAILS */}
        <div className="xl:col-span-8 space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-sm font-bold text-slate-800 uppercase tracking-wider flex items-center gap-2">
              <Shield className="w-4 h-4 text-sky-500" />
              Continuous Security Guardrails
            </h2>
            <button className="text-[10px] text-sky-600 hover:text-sky-700 font-bold uppercase tracking-wider">View All Policies</button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { name: "Encryption at Rest", cov: 100, status: "ok" },
              { name: "Encryption in Transit", cov: 100, status: "ok" },
              { name: "MFA Enforcement", cov: 98, status: "warn" },
              { name: "Network Segmentation", cov: 100, status: "ok" },
              { name: "Config & Audit Logging", cov: 100, status: "ok" },
              { name: "Least Privilege IAM", cov: 85, status: "alert" },
              { name: "Threat Detection", cov: 100, status: "ok" },
              { name: "Backup & Recovery", cov: 95, status: "warn" },
            ].map((gr, i) => (
              <div key={i} className="glass-card p-4 rounded-xl hover:border-sky-300 transition-colors group">
                <div className="flex justify-between items-start mb-3">
                  <Shield className={`w-5 h-5 ${gr.status === 'ok' ? 'text-emerald-500' : gr.status === 'warn' ? 'text-amber-500' : 'text-rose-500'}`} />
                  <span className="text-xs font-bold text-slate-700">{gr.cov}%</span>
                </div>
                <h3 className="text-xs font-bold text-slate-800 mb-1">{gr.name}</h3>
                <div className="w-full bg-slate-100 rounded-full h-1.5 mt-3 overflow-hidden">
                  <div className={`h-full rounded-full ${gr.status === 'ok' ? 'bg-emerald-500' : gr.status === 'warn' ? 'bg-amber-500' : 'bg-rose-500'}`} style={{ width: `${gr.cov}%` }}></div>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
            {/* SECTION 2: COMPLIANCE */}
            <div className="glass-card rounded-xl overflow-hidden">
              <div className="p-4 border-b border-slate-200 flex items-center gap-2 bg-slate-50/50">
                <FileCheck className="w-4 h-4 text-emerald-500" />
                <h2 className="text-xs font-bold text-slate-800 uppercase tracking-wider">Compliance Frameworks</h2>
              </div>
              <div className="p-0">
                <table className="w-full text-left">
                  <thead>
                    <tr className="bg-slate-50">
                      <th className="py-2 px-4 text-[10px] font-bold text-slate-500 uppercase">Framework</th>
                      <th className="py-2 px-4 text-[10px] font-bold text-slate-500 uppercase">Controls</th>
                      <th className="py-2 px-4 text-[10px] font-bold text-slate-500 uppercase">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-xs">
                    {[
                      { fw: "CIS AWS v3.0", ctrl: "43/43", stat: "Compliant", color: "text-emerald-600" },
                      { fw: "NIST 800-53", ctrl: "112/115", stat: "3 Findings", color: "text-amber-600" },
                      { fw: "SOC 2 Type II", ctrl: "64/64", stat: "Compliant", color: "text-emerald-600" },
                      { fw: "ISO 27001", ctrl: "114/114", stat: "Compliant", color: "text-emerald-600" },
                      { fw: "PCI DSS v4.0", ctrl: "N/A", stat: "Evaluating", color: "text-slate-500" },
                    ].map((row, i) => (
                      <tr key={i} className="hover:bg-slate-50/50">
                        <td className="py-2.5 px-4 font-medium text-slate-700">{row.fw}</td>
                        <td className="py-2.5 px-4 text-slate-500">{row.ctrl}</td>
                        <td className={`py-2.5 px-4 font-bold ${row.color}`}>{row.stat}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* SECTION 4: SCPs */}
            <div className="glass-card rounded-xl overflow-hidden">
              <div className="p-4 border-b border-slate-200 flex items-center gap-2 bg-slate-50/50">
                <Layers className="w-4 h-4 text-rose-500" />
                <h2 className="text-xs font-bold text-slate-800 uppercase tracking-wider">Active Service Control Policies</h2>
              </div>
              <div className="p-4 space-y-3">
                {[
                  { tag: "ROOT", text: "Deny root account usage org-wide", color: "bg-rose-100 text-rose-700 border-rose-200" },
                  { tag: "REGION", text: "Restrict to approved AWS regions", color: "bg-sky-100 text-sky-700 border-sky-200" },
                  { tag: "AUDIT", text: "Deny disabling CloudTrail", color: "bg-amber-100 text-amber-700 border-amber-200" },
                  { tag: "DATA", text: "Deny unencrypted S3 bucket creation", color: "bg-emerald-100 text-emerald-700 border-emerald-200" },
                  { tag: "NETWORK", text: "Require VPC for EC2 instances", color: "bg-indigo-100 text-indigo-700 border-indigo-200" },
                  { tag: "DETECT", text: "Prevent GuardDuty suspension", color: "bg-purple-100 text-purple-700 border-purple-200" },
                ].map((scp, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <span className={`px-1.5 py-0.5 text-[8px] font-bold rounded border ${scp.color} w-14 text-center shrink-0`}>{scp.tag}</span>
                    <span className="text-xs text-slate-700 truncate font-medium">{scp.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="xl:col-span-4 flex flex-col gap-6">
          {/* SECTION 5: TOPOLOGY MINIMAP */}
          <div className="glass-card rounded-xl p-4 relative overflow-hidden h-48 group bg-slate-50">
            <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:16px_16px] opacity-50"></div>
            <div className="relative z-10 flex flex-col h-full justify-between">
              <div className="flex items-center justify-between">
                <h2 className="text-xs font-bold text-slate-800 uppercase tracking-wider flex items-center gap-2">
                  <Server className="w-4 h-4 text-sky-500" />
                  Landing Zone Topology
                </h2>
                <span className="text-[10px] text-slate-500 font-mono">LIVE MAP</span>
              </div>
              <div className="flex items-center justify-center gap-4 mt-4">
                <div className="p-3 bg-white border border-slate-300 rounded-lg shadow-sm relative z-10">
                  <div className="text-[10px] font-bold text-slate-600 text-center">ORG ROOT</div>
                </div>
                <div className="h-px w-8 bg-slate-300"></div>
                <div className="flex flex-col gap-2">
                  <div className="px-3 py-1.5 bg-sky-50 border border-sky-200 rounded text-[10px] font-bold text-sky-700">Mgmt OU</div>
                  <div className="px-3 py-1.5 bg-emerald-50 border border-emerald-200 rounded text-[10px] font-bold text-emerald-700">Security OU</div>
                  <div className="px-3 py-1.5 bg-purple-50 border border-purple-200 rounded text-[10px] font-bold text-purple-700">Workloads OU</div>
                </div>
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-white/90 to-transparent pointer-events-none flex items-end justify-center pb-2 opacity-0 group-hover:opacity-100 transition-opacity">
              <button className="text-[10px] font-bold text-slate-700 bg-white px-3 py-1 rounded-full border border-slate-200 shadow-sm hover:bg-slate-50">Expand Architecture Map</button>
            </div>
          </div>

          {/* SECTION 3: LIVE AUDIT LOGS */}
          <div className="flex-1 min-h-[300px]">
            <LogsPanel />
          </div>
        </div>
      </div>
    </div>
  );
}

