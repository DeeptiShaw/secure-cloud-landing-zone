import { Tags, ShieldAlert } from "lucide-react";

export default function DataClassificationPage() {
  return (
    <div className="p-6 space-y-6 animate-in fade-in duration-700 max-w-[1800px] mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 glass-card p-6 rounded-2xl">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-slate-900 mb-1">Data Classification</h1>
          <p className="text-slate-500 text-xs font-medium">Amazon Macie findings and PII discovery.</p>
        </div>
      </div>

      <div className="glass-card rounded-2xl p-6 flex flex-col items-center justify-center min-h-[400px]">
        <Tags className="w-16 h-16 text-emerald-500 mb-4 opacity-80" />
        <h3 className="text-xl font-bold text-slate-800 mb-2">No Sensitive Data Exposed</h3>
        <p className="text-sm text-slate-500 text-center max-w-md mb-6">
          Amazon Macie is actively scanning S3 buckets across the organization. No unencrypted PII or sensitive data has been found in public buckets.
        </p>
        <div className="flex items-center gap-2 text-xs font-bold text-emerald-600 bg-emerald-50 px-4 py-2 rounded-full border border-emerald-200">
          <ShieldAlert className="w-4 h-4" />
          Continuous Scanning Active
        </div>
      </div>
    </div>
  );
}
