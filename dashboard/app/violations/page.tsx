import ViolationsTable from "@/components/ViolationsTable";

export default function ViolationsPage() {
  return (
    <div className="p-8 space-y-8 animate-in fade-in duration-500 max-w-6xl mx-auto">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-white mb-2">Security Violations</h1>
        <p className="text-zinc-400">Complete history of detected threats and remediations.</p>
      </div>
      
      <ViolationsTable />
    </div>
  );
}
