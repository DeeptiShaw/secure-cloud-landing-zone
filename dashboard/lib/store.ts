export type Severity = "Low" | "Medium" | "High";
export type Status = "Detected" | "Auto-Fixed";

export interface Violation {
  id: string;
  type: string;
  severity: Severity;
  status: Status;
  timestamp: string;
}

export interface LogEntry {
  id: string;
  message: string;
  timestamp: string;
}

// Global state using `globalThis` to avoid resets during Next.js hot reloads in dev
const globalAny: any = globalThis;

if (!globalAny.cloudStore) {
  globalAny.cloudStore = {
    violations: [
      {
        id: "v1",
        type: "Public S3 Bucket (Sensitive Data)",
        severity: "High",
        status: "Auto-Fixed",
        timestamp: new Date(Date.now() - 3600000 * 2).toISOString(),
      },
      {
        id: "v2",
        type: "IAM Over-permission (AdminAccess)",
        severity: "Medium",
        status: "Auto-Fixed",
        timestamp: new Date(Date.now() - 3600000).toISOString(),
      },
      {
        id: "v3",
        type: "Insecure SG Rule (0.0.0.0/0)",
        severity: "High",
        status: "Auto-Fixed",
        timestamp: new Date(Date.now() - 3600000 * 4).toISOString(),
      },
    ] as Violation[],
    logs: [
      {
        id: "l1",
        message: "SCP Enforced: Denied unencrypted S3 bucket creation",
        timestamp: new Date(Date.now() - 5000).toISOString(),
      },
      {
        id: "l2",
        message: "MFA Warning: Root login attempted without MFA (Blocked)",
        timestamp: new Date(Date.now() - 15000).toISOString(),
      },
      {
        id: "l3",
        message: "KMS Rotation: Automatic key rotation completed",
        timestamp: new Date(Date.now() - 45000).toISOString(),
      },
      {
        id: "l4",
        message: "Anomaly Detected: Unusual IAM API calls (Role: DevAdmin)",
        timestamp: new Date(Date.now() - 120000).toISOString(),
      },
      {
        id: "l5",
        message: "Account Vended: New sandbox account provisioned",
        timestamp: new Date(Date.now() - 360000).toISOString(),
      },
      {
        id: "l6",
        message: "Config Rule Pass: s3-bucket-public-read-prohibited",
        timestamp: new Date(Date.now() - 500000).toISOString(),
      },
    ] as LogEntry[],
    stats: {
      totalAccounts: 3,
      activeResources: 25,
      securityScore: 92,
      activeViolations: 0,
    }
  };
}

export const store = globalAny.cloudStore;

export function addViolation(violation: Violation) {
  store.violations.unshift(violation);
  store.stats.activeViolations++;
  store.stats.securityScore = Math.max(0, store.stats.securityScore - (violation.severity === "High" ? 15 : 5));
}

export function updateViolation(id: string, status: Status) {
  const v = store.violations.find((v: Violation) => v.id === id);
  if (v && v.status !== status) {
    v.status = status;
    if (status === "Auto-Fixed") {
      store.stats.activeViolations = Math.max(0, store.stats.activeViolations - 1);
      store.stats.securityScore = Math.min(100, store.stats.securityScore + (v.severity === "High" ? 15 : 5));
    }
  }
}

export function addLog(message: string) {
  store.logs.unshift({
    id: Math.random().toString(36).substring(7),
    message,
    timestamp: new Date().toISOString(),
  });
}
