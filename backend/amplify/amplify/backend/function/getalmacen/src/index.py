import json
import boto3

def handler(event, context):
    client = boto3.client('dynamodb')
    informacion = json.loads(event['body'])
    subinventario = informacion["subinventario"]

    res = client.get_item(
    TableName="Almacenes",
    Key={
        "sub_inventario":{"S":subinventario} 
    }
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