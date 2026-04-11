import { Key, Users } from "lucide-react";

export default function IAMPage() {
  return (
    <div className="p-6 space-y-6 animate-in fade-in duration-700 max-w-[1800px] mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 glass-card p-6 rounded-2xl">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-slate-900 mb-1">IAM & Access Management</h1>
          <p className="text-slate-500 text-xs font-medium">Identity Center, SSO, and least-privilege role monitoring.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="glass-card rounded-2xl overflow-hidden p-6 flex flex-col items-center justify-center min-h-[300px]">
          <Key className="w-12 h-12 text-amber-500 mb-4 opacity-80" />
          <h3 className="text-lg font-bold text-slate-800 mb-2">IAM Access Analyzer</h3>
          <p className="text-sm text-slate-500 text-center max-w-sm">No over-privileged roles detected in the last 24 hours.</p>
        </div>
        <div className="glass-card rounded-2xl overflow-hidden p-6 flex flex-col items-center justify-center min-h-[300px]">
          <Users className="w-12 h-12 text-sky-500 mb-4 opacity-80" />
          <h3 className="text-lg font-bold text-slate-800 mb-2">AWS IAM Identity Center</h3>
          <p className="text-sm text-slate-500 text-center max-w-sm">SSO is configured via external SAML 2.0 Identity Provider.</p>
        </div>
      </div>
    </div>
  );
}
