# Guardrails — Policy Engineering Documentation

## Overview
This document covers all preventive and detective guardrails implemented as part of the Enterprise Secure Landing Zone.

Guardrails work in two ways:
- **Preventive (SCPs)** — block dangerous actions BEFORE they happen
- **Detective (Config Rules)** — detect violations AFTER they happen

Both are required for complete security coverage.

---

## Preventive Guardrails — Service Control Policies (SCPs)

SCPs are organisation-wide rules that nobody can bypass — not even account administrators.

### SCP 1: Block Public S3 Buckets
- **File:** scp/block-public-s3.json
- **What it blocks:** Making any S3 bucket publicly accessible
- **Why it matters:** Public S3 buckets are the #1 cause of data breaches in AWS — customer data exposed to the internet
- **CIS Benchmark:** CIS 2.1.5
- **NIST Control:** SC-7 (Boundary Protection)

### SCP 2: Protect CloudTrail Logging
- **File:** scp/block-disable-cloudtrail.json
- **What it blocks:** Stopping, deleting or modifying CloudTrail
- **Why it matters:** CloudTrail is the audit diary — attackers always try to delete logs to hide their activity
- **CIS Benchmark:** CIS 3.1
- **NIST Control:** AU-2 (Audit Events)

### SCP 3: Deny Unencrypted S3 Uploads
- **File:** scp/deny-unencrypted-s3.json
- **What it blocks:** Uploading any file to S3 without encryption
- **Why it matters:** Unencrypted data at rest is a compliance violation — financial, medical and personal data must be encrypted by law in most industries
- **CIS Benchmark:** CIS 2.1.1
- **NIST Control:** SC-28 (Protection of Information at Rest)

### SCP 4: Protect GuardDuty
- **File:** scp/protect-guardduty.json
- **What it blocks:** Disabling or modifying GuardDuty threat detection
- **Why it matters:** GuardDuty is the security camera — if an attacker disables it they can act without being detected
- **Exception:** Only SecurityBreakGlassRole can modify GuardDuty
- **CIS Benchmark:** CIS 4.1
- **NIST Control:** SI-3 (Malicious Code Protection)

---

## Detective Guardrails — AWS Config Rules

Config rules continuously scan your AWS environment and flag anything that violates security rules.

### Config Rule 1: s3-bucket-public-read-prohibited
- **What it checks:** S3 buckets allowing public read access
- **Result if violated:** NON_COMPLIANT
- **Linked SCP:** block-public-s3.json
- **CIS Benchmark:** CIS 2.1.5
- **NIST Control:** SC-7

### Config Rule 2: cloud-trail-enabled
- **What it checks:** Whether CloudTrail is active in all regions
- **Result if violated:** NON_COMPLIANT
- **Linked SCP:** block-disable-cloudtrail.json
- **CIS Benchmark:** CIS 3.1
- **NIST Control:** AU-2

### Config Rule 3: root-account-mfa-enabled
- **What it checks:** Whether root account has MFA enabled
- **Result if violated:** NON_COMPLIANT
- **CIS Benchmark:** CIS 1.5
- **NIST Control:** IA-2 (Identification and Authentication)

### Config Rule 4: cloud-trail-encryption-enabled
- **What it checks:** Whether CloudTrail logs are encrypted using KMS
- **Result if violated:** NON_COMPLIANT
- **Current status:** Noncompliant — KMS key not yet configured (cost consideration)
- **Recommended action:** Create KMS key and attach to org-audit-trail for production deployment
- **CIS Benchmark:** CIS 3.7
- **NIST Control:** AU-9 (Protection of Audit Information)

---

## Compliance Mapping Summary

| Control | Type | CIS AWS v3 | NIST 800-53 |
|---|---|---|---|
| Block public S3 | Preventive SCP | CIS 2.1.5 | SC-7 |
| Protect CloudTrail | Preventive SCP | CIS 3.1 | AU-2 |
| Deny unencrypted S3 | Preventive SCP | CIS 2.1.1 | SC-28 |
| Protect GuardDuty | Preventive SCP | CIS 4.1 | SI-3 |
| S3 public read check | Detective Config | CIS 2.1.5 | SC-7 |
| CloudTrail enabled check | Detective Config | CIS 3.1 | AU-2 |
| Root MFA check | Detective Config | CIS 1.5 | IA-2 |
| CloudTrail encryption | Detective Config | CIS 3.7 | AU-9 |

---

## How Preventive and Detective Work Together
```
Developer tries to make S3 bucket public
            ↓
SCP blocks the action immediately        ← Preventive
            ↓
Config rule scans all buckets anyway     ← Detective
            ↓
Any violation triggers SNS alert
            ↓
Lambda auto-remediates                   ← Responsive
```

This three-layer approach ensures:
- Bad actions are blocked before they happen
- Any that slip through are immediately detected
- Detection triggers automatic fixing

---

## Integration with Other Project Phases

| Phase | Role | How it connects to guardrails |
|---|---|---|
| Phase 1 - IAM | Access control | SCPs enforce boundaries IAM cannot override |
| Phase 2 - Guardrails | This document | Preventive + detective controls |
| Phase 3 - Monitoring | Logging + alerts | Config findings feed into CloudWatch alerts |
| Phase 4 - Automation | Lambda fixes | Config NON_COMPLIANT triggers auto-remediation |
