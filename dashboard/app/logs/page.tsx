import LogsPanel from "@/components/LogsPanel";

export default function LogsPage() {
  return (
    <div className="p-8 h-full flex flex-col space-y-8 animate-in fade-in duration-500 max-w-5xl mx-auto">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-white mb-2">Audit Logs</h1>
        <p className="text-zinc-400">Live stream of CloudTrail events and Lambda remediations.</p>
      </div>
      
      <div className="flex-1 min-h-[600px]">
        <LogsPanel />
      </div>
    </div>
  );
}
