import { NextResponse } from "next/server";
import { store, updateViolation, addLog } from "@/lib/store";

export async function GET() {
  return NextResponse.json(store.violations);
}

export async function PATCH(req: Request) {
  const { id, status } = await req.json();
  if (id && status) {
    updateViolation(id, status);
    if (status === "Auto-Fixed") {
      const v = store.violations.find((v: any) => v.id === id);
      addLog(`Lambda automatically remediated issue: ${v?.type}`);
    }
    return NextResponse.json({ success: true, stats: store.stats });
  }
  return NextResponse.json({ success: false }, { status: 400 });
}
