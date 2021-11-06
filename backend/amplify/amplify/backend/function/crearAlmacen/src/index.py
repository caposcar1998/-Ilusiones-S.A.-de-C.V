import json
from typing import cast
import boto3

def handler(event, context):
  client = boto3.client('dynamodb')
  
  informacion = json.loads(event['body'])
  
  subinventario = informacion["subinventario"]
  nombre = informacion["nombre"]
  res = insertar_a_almacenes(client,nombre,subinventario)
  
  return {
      'statusCode': res["codigo"],
      'headers': {
          'Access-Control-Allow-Headers': '*',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'OPTIONS,POST,GET'
      },
      'body': json.dumps(res["mensaje"])
  }


def insertar_a_almacenes(client,nombre,subinventario):
    resultado = {}
    res = client.get_item(
        TableName="Almacenes",
        Key={
            "sub_inventario":{"S":subinventario} 
        }
    )
    try:
        resultado["nombre"] = res["Item"]["nombre"]['S']
    except Exception as e:
        print(e)

        
    if(len(resultado) >=1 ):
       return {"codigo":404, "mensaje":"Este registro ya existe en la base de datos"} 
    else:
        client.put_item(
        TableName='Almacenes',
        Item={
            "nombre":{"S":nombre},
            "sub_inventario":{"S":subinventario},
            "ordenes":{"BS":{}},
            "inventario":{"BS":{}}

        }
        )
        
        return {"codigo":201, "mensaje":"Creado con exito"}

if __name__ == "__main__":
    event={"body":'{"nombre":"Almacen1","subinventario":"IDBCA00009"}',"requestContext":{"http":{"method":"POST"}}}
    print(handler(event))