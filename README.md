# Ilusiones S.A de C.V

La empresa Ilusiones S.A. de C.V. vende equipos celulares y necesita realizar compras de mercancía
a través de 2 archivos. Este sistema busca resolver la problematica de esta empresa.


## Instalando el proyecto

- [AmplifyCli](https://docs.amplify.aws/cli/start/install/)
- [Python 3.8](https://www.python.org/downloads/)
- [React](https://es.reactjs.org/)
- Archivo tipo .env con las siguientes variables (estas te las dara tu admin):
    - AMAZON_ID
    - AMAZON_SECRET_KEY
    - URL_PROJECT



## Stack 

- DybamoDB : Base de datos no relacional
- React: Framework de JS para el frontend
- Python: Lenguaje de programación para el backend
- Amplify: Framework de AWS que contiene frontend y backend

## Arquitectura

![alt text](https://m2crowdoscar.s3.us-west-2.amazonaws.com/arquitectura.drawio.png?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMSJHMEUCIQCq%2B3tVeIl43ArouJEz%2BpX5tp3jhRgUB%2FWw79zOdiPDUAIgFl2lnlS9ZCApHzndOWtHYvzxPwyESFsM34kmItPcU3cq%2FwIIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARABGgw0NzcyODc3MDg1NDQiDFPfVONckX3KrD%2FZpirTAplzIct6ZIYAYftUr2Kt8J9lrA3M%2BbB5x0L%2FsmOGpx9rQdRClaWNtBR2sNLSSN9C5hyYU8YZEvCEiGgCMbS%2F8AJ6pGOL5flPvCshzk29Rqxvc5Slfs7VKF1cPPA2FiS6NdMxqqqX%2Fo3qEE5V2%2Fa7jigvjNstiILe%2F9uUEhQgncP2a8McSd2p%2BS2LwIgdfjkuqVLez%2FHDhgzLINv5W0JVmnITxkVIHiPZkQDy6bKMUBBxz0YfKpEGeInyRMl9twW7pu%2BAgb5Zd2O7WauD0L%2FdBDBvBbzrLbnm9N1HTfv6%2F%2BDEJ%2F%2FtHbTmjLldpo0vv88g5CueS3vPEOfC9YilppJWkBBn8x30vOp9G7fL3LmeLscltbw1s7j%2BxfW44IGcN1dMjfJ%2BYunADpmiO%2B8%2FJllpKu5OnHqn%2BXlqjOlrGVpk6iOaHBOwCMFNU%2BKrr%2FBukiJfqdp%2BEDDJjaCMBjqzAs%2FbTZ0GiqrHA3fSIntkLU3G7b%2BWdnLrxZXihO%2BdPHllQzcitTQkKhdipcNjpJQg9WPeK603qRlyRDJlzQqd61gdEuzDub6QZeyGg3ujtzrqFNYe%2BlUbX6rvALl8rxj1K%2BLj20P7ffabf%2BB2Fv4iWlbRda0OPeBu%2BrliCsLfWE80g8IyH8nYDPrNWTKs%2BXi52OWu2%2BNRFUZ0Ux%2BD0RjXA1jhRD2jo0Wk47J1SiyjRndHK7FjUo9EGowRF8SDIO69%2BDpvWFpV9bTROc6ObfwOessiAX89jxrikRU8EU8y7x5bMFVLmnsU4JGGKAskXyjKZ0HqG3kW965YnRsuFW7IOA28Tp%2BDhDexYhm%2BeV2xo7cM3tSmBfZUDnycUF1RusK2m8ubn8o1uz04scSxQ5vsi3RmFxI%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20211107T231917Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIAW6IEQO6AOJJILFHL%2F20211107%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Signature=78975be5a918f7402836eaafed69b1c66d1ffde1bdc8690e867ce7a9d4e249cc)


## CI/CD

Cuando se crea una rama nueva en el proyecto, el framework de amplify crea una URL para que puedas probar tus cambios
online, solicita esta URL a tu lider de proyecto. 


## Available Scripts

In the project directory, you can run:


### `amplify status`

Revisa el status de tu stack

### `amplify pull`

Recupera el stack del backend en tu local


### `amplify add function`

Anade una función tipo lambda al stack


### `amplify add api`

Anade una API y/o anade endpoints


### `amplify push`

Sube tu actualización del stack a la nube de AWS

### `npm start`

Usa el proyecto en modo desarrollo
Abre [http://localhost:3000](http://localhost:3000) en cualquier navegador




