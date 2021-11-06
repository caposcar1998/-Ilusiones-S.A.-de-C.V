from io import BytesIO
import json
import boto3
from botocore.exceptions import ClientError
from openpyxl import Workbook
import openpyxl
import logging
import os

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
    ref = wb.active
    sheet = wb.active
    for row in sheet.iter_rows():
        column = 1
        titulo = ""
        for cell in row:
            if(column == 1):
                titulo = cell.value
                workbook = Workbook()
                sheet = workbook.active
                sheet["A1"] = f"Orden de compra de:{cell.value}"


            elif(column == 2):
                sheet["A2"] = f"Cliente :{cell.value}"
            else:


                if((cell.value != None)):
                    sheet.cell(column=5, row=sheet.max_row+1, value=str(ref.cell(row=1, column=column).value))
                    sheet.cell(column=6, row=sheet.max_row+1, value=cell.value)             
            column = column + 1   


        workbook.save(filename="/tmp/"+titulo+".xlsx")
        try:
            upload_file(("/tmp/"+titulo+".xlsx"),"m2crowdoscar","ordenes/ordenesFinales/"+titulo+".xlsx")
        except Exception as e:
            print(e)

def upload_file(file_name, bucket, object_name=None):

    s3 = boto3.client('s3')
    with open(file_name, "rb") as f:
        s3.upload_fileobj(f, bucket, object_name)