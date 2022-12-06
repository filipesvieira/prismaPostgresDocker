/**
* @swagger
* components:
*   securitySchemes:
*     bearerAuth:
*       type: http
*       scheme: bearer
*       bearerFormat: JWT
*/

/**
* @swagger
* components:
*   schemas:
*     adClienteData:
*         type: array
*         items:
*           type: object
*           properties:
*             nome:
*               type: string
*               required: true
*             apelido:
*               type: string
*               required: true
*             codigo:
*               type: string
*               required: true
*             registro:
*               type: string
*               required: true
*             reg_est:
*               type: string
*               required: true
*             email:
*               type: string
*               required: true
*             telefone:
*               type: string
*               required: true
*             celular:
*               type: string
*               required: true
*             fax:
*               type: string
*               required: true
*/

/**
* @swagger
* components:
*   schemas:
*     etiquetaData:
*         type: array
*         items:
*           type: object
*           properties:
*             nome:
*               type: string
*               required: true
*               example: 'Filipe Vieira'
*             id_pedido:
*               type: integer
*               required: true
*               example: 1
*             id_integ_pedido:
*               type: integer
*               required: true
*               example: 1
*             id_pessoa:
*               type: integer
*               required: true
*               example: 1
*             id_pessoa_origem:
*               type: integer
*               required: true
*               example: 1
*             status:
*               type: string
*               required: true
*               example: "S"
*             dh_inc:
*               type: string
*               required: true
*               format: date-time
*               example: "2021-01-30T08:30:00Z"
*             dh_conc:
*               type: string
*               required: true
*               format: date-time
*               example: "2021-01-30T08:30:00Z"
*             quantidade:
*               type: integer
*               required: true
*               example: 21
*/