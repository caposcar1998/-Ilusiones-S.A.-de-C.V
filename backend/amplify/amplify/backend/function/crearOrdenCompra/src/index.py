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
    ref = wb.active
    sheet = wb.active
    for row in sheet.iter_rows():
        column = 1
        titulo = ""
        for cell in row:
            if(column == 1):
                print("Columna",sheet.cell(row=1, column=column).value)
                print("_Id", cell.value)
                titulo = cell.value
                workbook = Workbook()
                sheet = workbook.active
                sheet["A1"] = f"Orden de compra de:{cell.value}"


            elif(column == 2):
                print("Columna",sheet.cell(row=1, column=column).value)
                print("Titulo", cell.value)
                sheet["A2"] = f"Cliente :{cell.value}"
            else:


                if((cell.value != None)):
                    print("Celular",ref.cell(row=1, column=column).value)
                    print("Numero de celulares", cell.value) 
                    sheet.cell(column=5, row=sheet.max_row+1, value=str(ref.cell(row=1, column=column).value))
                    sheet.cell(column=6, row=sheet.max_row+1, value=cell.value)             
            column = column + 1   


        print()
        workbook.save(filename="archivos/"+titulo+".xlsx")



