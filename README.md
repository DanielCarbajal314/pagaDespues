# pagaDespues
Los endpoints se construyeron de manera serverless en AWS usando funciones Lambda y ApiGateway. Se uso el framework Serverless(https://serverless.com)

Los endpoints son los siguientes

Method  | EndPoint
------------- | -------------
GET  | https://1xl2yvgmgi.execute-api.us-east-2.amazonaws.com/dev/listUsers
POST  | https://1xl2yvgmgi.execute-api.us-east-2.amazonaws.com/dev/createUser
GET  | https://1xl2yvgmgi.execute-api.us-east-2.amazonaws.com/dev/listPaymentMethods
POST  | https://1xl2yvgmgi.execute-api.us-east-2.amazonaws.com/dev/createPayment
POST  | https://1xl2yvgmgi.execute-api.us-east-2.amazonaws.com/dev/createPaymentMethod

Se adjunto un archivo JSON de Postman con una coleccion de ejemplo de llamadas