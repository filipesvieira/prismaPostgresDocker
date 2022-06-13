const UserController = require('./lib');

/**
* @swagger
* components:
*
*   schemas:
*
*     userData:
*         type: array
*         items:
*           type: object
*           properties:
*             name:
*               type: string
*               required: true
*             email:
*               type: string
*               required: true
*/

interface App {
    post: any;
    get: any;
}

interface User {
    name?: string,
    email?: string,
};

let users: Array<User> = [];

module.exports = (app: App) => {
    /**
    * @swagger
    * /user:
    *   post:
    *     summary: Inserta novos users
    *     description: Endpoint que recebe array de objetos com os dados de users que serão inseridos na base de dados
    *     tags:
    *       - USER
    *     security:
    *       - bearerAuth: []
    *     produces:
    *       - application/json
    *     requestBody:
    *         description: 'Array de objetos para insertar novos users'
    *         required: true
    *         content:
    *           application/json:
    *             schema:
    *               $ref: '#/components/schemas/userData'
    *     responses:
    *       200:
    *         description: 'success'
    *       400:
    *         description: 'bad request'
    *       404:
    *         description: 'not found'
    */
    app.post('/user', async (req: any, res: any) => {
        if (req.method === 'POST') {
            try {
                let users = await UserController.insert(req);
                res.status(200).json(JSON.parse(JSON.stringify(users)));
            } catch (error) {
                res.status(404).json(JSON.parse(JSON.stringify(error)));
                res.end();
            }
        } else {
            res.status(400).json(JSON.parse(JSON.stringify('bad request, incorrect method')));
            res.end(); 
        }
    });

    /**
    * @swagger
    * /user:
    *   get:
    *     summary: Busca dados dos users
    *     description: Busca dados dos users já cadastrados na base de dados de acordo com os parâmetros enviados
    *     tags:
    *       - USER
    *     security:
    *       - bearerAuth: []
    *     produces:
    *       - application/json
    *     responses:
    *       200:
    *         description: 'success'
    *       400:
    *         description: 'bad request'
    *       404:
    *         description: 'not found'
    */
    app.get('/user', async (req: any, res: any) => {
        if (req.method === 'GET') {
            try {
                let users = await JogadorController.get(req);
                res.status(200).json(JSON.parse(JSON.stringify(users)));
            } catch (error) {
                res.status(404).json(JSON.parse(JSON.stringify(error)));
                res.end();
            }
        } else {
            res.status(400).json(JSON.parse(JSON.stringify('bad request, incorrect method')));
            res.end();
        }
    });
}