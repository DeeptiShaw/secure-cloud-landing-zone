import { Sliders } from "lucide-react";

export default function SettingsPage() {
  return (
    <div className="p-6 space-y-6 animate-in fade-in duration-700 max-w-[1800px] mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 glass-card p-6 rounded-2xl">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-slate-900 mb-1">Landing Zone Settings</h1>
          <p className="text-slate-500 text-xs font-medium">Configure global parameters and notifications.</p>
        </div>
      </div>

      <div className="glass-card rounded-2xl max-w-3xl overflow-hidden">
        <div className="p-4 border-b border-slate-200 bg-slate-50/50">
          <h2 className="text-sm font-bold text-slate-800 flex items-center gap-2">
            <Sliders className="w-4 h-4 text-sky-500" />
            Global Configuration
          </h2>
        </div>
        <div className="p-6 space-y-6">
          <div>
            <label className="block text-xs font-bold text-slate-500 mb-2 uppercase tracking-wider">Home Region</label>
            <select className="w-full bg-white border border-slate-200 rounded-lg p-2.5 text-sm text-slate-800 focus:outline-none focus:border-sky-500 transition-colors shadow-sm">
              <option>ap-south-1 (Mumbai)</option>
              <option>us-east-1 (N. Virginia)</option>
              <option>eu-west-1 (Ireland)</option>
            </select>
          </div>
          <div>
            <label className="block text-xs font-bold text-slate-500 mb-2 uppercase tracking-wider">Alert Notification Email</label>
            <input 
              type="email" 
              defaultValue="security-team@securebase.inc"
              className="w-full bg-white border border-slate-200 rounded-lg p-2.5 text-sm text-slate-800 focus:outline-none focus:border-sky-500 transition-colors shadow-sm"
            />
          </div>
          <div className="pt-4">
            <button className="px-6 py-2.5 bg-slate-900 hover:bg-slate-800 text-white rounded-lg text-sm font-bold transition-all shadow-md active:scale-95">
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
