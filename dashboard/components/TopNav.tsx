import { Bell, User, ShieldCheck } from "lucide-react";

export default function TopNav() {
  return (
    <div className="h-14 border-b border-slate-200 bg-white/80 backdrop-blur-xl flex items-center justify-between px-6 sticky top-0 z-50 shrink-0 shadow-sm">
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-5 h-5 text-sky-500" />
          <span className="font-bold text-sm tracking-widest text-slate-800">SECUREBASE</span>
        </div>
        <div className="h-4 w-px bg-slate-300"></div>
        <div className="flex items-center gap-2">
          <span className="px-2 py-0.5 bg-rose-100 text-rose-600 text-[10px] font-bold rounded uppercase border border-rose-200 tracking-wider">PROD</span>
          <span className="px-2 py-0.5 bg-sky-100 text-sky-600 text-[10px] font-bold rounded uppercase border border-sky-200 tracking-wider">aws-ap-south-1</span>
          <span className="px-2 py-0.5 bg-slate-100 text-slate-600 text-[10px] font-bold rounded uppercase border border-slate-200 tracking-wider">LZ v3.2.0</span>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <div className="relative">
          <Bell className="w-4 h-4 text-slate-500 hover:text-slate-800 transition-colors cursor-pointer" />
          <span className="absolute -top-1 -right-1 w-2 h-2 bg-rose-500 rounded-full animate-pulse border-2 border-white"></span>
        </div>
        <div className="h-7 w-7 bg-slate-100 rounded-full flex items-center justify-center border border-slate-200 cursor-pointer hover:bg-slate-200 transition-colors">
          <User className="w-4 h-4 text-slate-600" />
        </div>
      </div>
    </div>
  );
}
