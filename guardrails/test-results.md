# Guardrail Test Results

## Overview
This document records the testing of all preventive and detective guardrails implemented in the Enterprise-Grade Secure Cloud Landing Zone.

---

## Test 1: Block Public S3 Bucket
- **Date tested:** 24-02-2026
- **SCP tested:** block-public-s3.json
- **Action attempted:** Make S3 bucket public via ACL settings
- **Expected result:** Action blocked with Access Denied
- **Actual result:** [fill after testing in AWS]
- **Evidence:** compliance-screenshots/s3-public-block.png

---

## Test 2: Protect CloudTrail
- **Date tested:** 24-02-2026
- **SCP tested:** block-disable-cloudtrail.json
- **Action attempted:** Stop logging on CloudTrail trail
- **Expected result:** Action blocked with Access Denied
- **Actual result:** [fill after testing in AWS]
- **Evidence:** compliance-screenshots/cloudtrail-block.png

---

## Test 3: Deny Unencrypted S3 Upload
- **Date tested:** 24-02-2026
- **SCP tested:** deny-unencrypted-s3.json
- **Action attempted:** Upload file to S3 without encryption
- **Expected result:** Upload blocked with Access Denied
- **Actual result:** [fill after testing in AWS]
- **Evidence:** compliance-screenshots/unencrypted-upload.png

---

## Test 4: Protect GuardDuty
- **Date tested:** 24-02-2026
- **SCP tested:** protect-guardduty.json
- **Action attempted:** Disable GuardDuty detector
- **Expected result:** Action blocked with Access Denied
- **Actual result:** [fill after testing in AWS]
- **Evidence:** compliance-screenshots/guardduty-protect.png

---

## Test 5: AWS Config Compliance Dashboard
- **Date tested:** 24-02-2026
- **Rules evaluated:** 3
- **Compliant resources:** [fill after checking AWS]
- **Non-compliant resources:** [fill after checking AWS]
- **Evidence:** compliance-screenshots/config-dashboard.png

---

## Test Summary

| Test | SCP File | Expected | Result |
|---|---|---|---|
| Block public S3 | block-public-s3.json | Access Denied | [PASS/FAIL] |
| Protect CloudTrail | block-disable-cloudtrail.json | Access Denied | [PASS/FAIL] |
| Deny unencrypted upload | deny-unencrypted-s3.json | Access Denied | [PASS/FAIL] |
| Protect GuardDuty | protect-guardduty.json | Access Denied | [PASS/FAIL] |
| Config dashboard | AWS Config rules | Rules active | [PASS/FAIL] |

---

## Note on Testing Environment
These SCPs were tested in a simulated single-account environment. In a full AWS Organizations setup, SCPs would be attached at the OU level and inherited by all member accounts automatically.