import json
import boto3

def handler(event, context):
    client = boto3.client('dynamodb')

    res = client.scan(
        TableName="Almacenes"
    )
  
    return {
        'statusCode': 200,
        'headers': {
            'Access-Control-Allow-Headers': '*',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'OPTIONS,POST,GET'
        },
        'body': json.dumps(res)
    }