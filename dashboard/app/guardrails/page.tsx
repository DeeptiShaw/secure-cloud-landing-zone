import { Shield, CheckCircle2, XCircle } from "lucide-react";

export default function GuardrailsPage() {
  const guardrails = [
    { name: "Require MFA for Root Account", category: "IAM", type: "Preventive", status: "Enforced", resourceCount: 1 },
    { name: "Block Public S3 Buckets", category: "Storage", type: "Preventive", status: "Enforced", resourceCount: 42 },
    { name: "Encrypt EBS Volumes", category: "Compute", type: "Detective", status: "Warning", resourceCount: 12 },
    { name: "Disable Unused Regions", category: "Network", type: "Preventive", status: "Enforced", resourceCount: 15 },
    { name: "Enable CloudTrail Logging", category: "Audit", type: "Detective", status: "Enforced", resourceCount: 12 },
    { name: "Restrict Admin Access", category: "IAM", type: "Preventive", status: "Warning", resourceCount: 3 },
  ];

  return (
    <div className="p-6 space-y-6 animate-in fade-in duration-700 max-w-[1800px] mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 glass-card p-6 rounded-2xl">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-slate-900 mb-1">Continuous Security Guardrails</h1>
          <p className="text-slate-500 text-xs font-medium">Preventive and detective controls applied across your organization.</p>
        </div>
      </div>

      <div className="glass-card rounded-2xl overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-slate-50 border-b border-slate-200">
            <tr>
              <th className="py-4 px-6 text-xs font-bold text-slate-500 uppercase">Guardrail Name</th>
              <th className="py-4 px-6 text-xs font-bold text-slate-500 uppercase">Category</th>
              <th className="py-4 px-6 text-xs font-bold text-slate-500 uppercase">Type</th>
              <th className="py-4 px-6 text-xs font-bold text-slate-500 uppercase">Status</th>
              <th className="py-4 px-6 text-xs font-bold text-slate-500 uppercase text-right">Resources Evaluated</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {guardrails.map((gr, i) => (
              <tr key={i} className="hover:bg-slate-50/80 transition-colors">
                <td className="py-4 px-6 text-sm font-medium text-slate-800 flex items-center gap-3">
                  <Shield className="w-4 h-4 text-sky-500" />
                  {gr.name}
                </td>
                <td className="py-4 px-6">
                  <span className="px-2 py-1 bg-slate-100 text-slate-600 text-[10px] font-bold rounded uppercase border border-slate-200">{gr.category}</span>
                </td>
                <td className="py-4 px-6 text-sm text-slate-500">{gr.type}</td>
                <td className="py-4 px-6">
                  {gr.status === "Enforced" ? (
                    <span className="flex items-center gap-1.5 text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full border border-emerald-200 w-fit">
                      <CheckCircle2 className="w-3.5 h-3.5" /> Enforced
                    </span>
                  ) : (
                    <span className="flex items-center gap-1.5 text-xs font-bold text-amber-600 bg-amber-50 px-2 py-1 rounded-full border border-amber-200 w-fit">
                      <XCircle className="w-3.5 h-3.5" /> Warning
                    </span>
                  )}
                </td>
                <td className="py-4 px-6 text-sm text-slate-500 text-right font-mono">{gr.resourceCount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
