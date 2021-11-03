from io import BytesIO
import json
import boto3
from botocore.exceptions import ClientError
from openpyxl import Workbook
import openpyxl

def handler(event, context):
    nombre_archivo = event["body"]

    obtener_archivo_s3(nombre_archivo)
    
    
    return {
      'statusCode': 200,
      'headers': {
          'Access-Control-Allow-Headers': '*',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'OPTIONS,POST,GET'
      },
      'body': json.dumps('Hello from your new Amplify Python lambda!')
    }

def obtener_archivo_s3(nombre_archivo):
    client = boto3.client('s3')

    res = client.get_object(
        Bucket = "m2crowdoscar",
        Key="ordenes/"+nombre_archivo
    )


    binary_data = res['Body'].read()
    wb = openpyxl.load_workbook(BytesIO(binary_data),data_only=True)
    sheet = wb.active
    for row in sheet.iter_rows():
        print(row)
        for cell in row:
            try:
                print(cell.value)
            except:
                pass

