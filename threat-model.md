# Threat Model

## Threat 1: IAM Key Leaked
| Field | Detail |
|---|---|
| Threat | Developer commits AWS key to GitHub |
| Impact | Full account compromise |
| Likelihood | High |
| Prevention | No long-lived keys, roles only |
| Detection | GuardDuty, CloudTrail |

## Threat 2: S3 Made Public
| Field | Detail |
|---|---|
| Threat | Developer misconfigures S3 permissions |
| Impact | Data breach |
| Likelihood | High |
| Prevention | SCP block-public-s3.json |
| Detection | Config rule |

## Threat 3: Attacker Disables Monitoring
| Field | Detail |
|---|---|
| Threat | Attacker disables GuardDuty/CloudTrail |
| Impact | No forensic evidence |
| Likelihood | Medium |
| Prevention | protect-guardduty.json SCP |
| Detection | Config cloudtrail-enabled rule |

## Threat 4: Privilege Escalation
| Field | Detail |
|---|---|
| Threat | Developer gains admin permissions |
| Impact | Full security bypass |
| Likelihood | Medium |
| Prevention | IAM least privilege roles |
| Detection | CloudTrail IAM alerts |

## Threat 5: Unencrypted Data
| Field | Detail |
|---|---|
| Threat | Sensitive files uploaded without encryption |
| Impact | Compliance violation |
| Likelihood | High |
| Prevention | deny-unencrypted-s3.json SCP |
| Detection | Config encryption rule |
