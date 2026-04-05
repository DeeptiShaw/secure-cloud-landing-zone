import { NextResponse } from "next/server";
import { store, addViolation, addLog } from "@/lib/store";

const VIOLATION_TYPES = [
  { type: "Public S3 Bucket", severity: "High" },
  { type: "IAM Over-permission", severity: "High" },
  { type: "Open Port 22 (SSH)", severity: "Medium" },
  { type: "Unencrypted EBS Volume", severity: "Medium" },
  { type: "MFA Not Enabled on Root", severity: "High" },
];

export async function POST() {
  const randomType = VIOLATION_TYPES[Math.floor(Math.random() * VIOLATION_TYPES.length)];
  
  const violation = {
    id: `v_${Date.now()}_${Math.random().toString(36).substr(2, 5)}`,
    type: randomType.type,
    severity: randomType.severity as "High" | "Medium" | "Low",
    status: "Detected" as const,
    timestamp: new Date().toISOString(),
  };

  addViolation(violation);
  addLog(`User action triggered alert: ${violation.type} detected.`);

  return NextResponse.json({ success: true, violation, stats: store.stats });
}
