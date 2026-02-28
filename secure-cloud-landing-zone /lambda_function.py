cloud-landing-zone/
└── lambda-remediation/
    ├── lambda_function.py
    ├── requirements.txt
    └── README.md  
import json
import boto3

ec2 = boto3.client('ec2')

def lambda_handler(event, context):
    """
    This Lambda function stops non-compliant EC2 instances
    triggered by AWS Config or CloudWatch Events.
    """

    try:
        # Extract instance ID from event
        instance_id = event['detail']['instance-id']

        # Stop EC2 instance
        response = ec2.stop_instances(InstanceIds=[instance_id])

        return {
            "statusCode": 200,
            "body": json.dumps(f"Instance {instance_id} stopped successfully.")
        }

    except Exception as e:
        return {
            "statusCode": 500,
            "body": json.dumps(f"Error: {str(e)}")
        }


