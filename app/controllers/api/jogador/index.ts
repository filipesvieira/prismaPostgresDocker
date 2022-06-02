import { PrismaClient } from "@prisma/client";

/**
* @swagger
* components:
*
*   schemas:
*     jogador:
*       security:
*         security:
*       properties:
*         id:
*           type: integer
*         name:
*           type: string
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
    * /jogador:
    *   post:
    *     summary: SUMMARY
    *     description: DESCRIPTION
    *     tags:
    *       - JOGADOR
    *     security:
    *       - bearerAuth: []
    *     produces:
    *       - application/json
    *     parameters:
    *       - in: body
    *         name: body
    *         description: "Endpoint para insertar um novo jogador"
    *         required: true
    *         schema:
    *           "$ref": "#/components/schemas/jogador"
    *     responses:
    *       200:
    *         description: "success"
    *       400:
    *         description: "bad request"
    */
    app.post('/jogador', (req: any, res: any) => {
        res.status(200).send(`JOGADOR POST`);
    });

    /**
    * @swagger
    * /jogador:
    *   get:
    *     summary: SUMMARY
    *     description: DESCRIPTION
    *     tags:
    *       - JOGADOR
    *     security:
    *       - bearerAuth: []
    *     produces:
    *       - application/json
    *     parameters:
    *       - name: status
    *         in: query
    *         type: string
    *         enum:
    *           - INICIO
    *           - FINALIZADO
    *         description: "Status param"
    *         required: false
    *       - name: data
    *         in: query
    *         type: string
    *         description: "data param"
    *         required: false
    *     responses:
    *       200:
    *         description: "success"
    *       400:
    *         description: "bad request"
    */
    app.get('/jogador', async (req: any, res: any) => {
        let prisma: PrismaClient;
        prisma = new PrismaClient();
        if (req.method === 'GET') {
            try {
                let jogadores = await prisma.jogador.findMany();
                console.dir(jogadores, { depth: null })
                res.status(200).json(JSON.parse(JSON.stringify(jogadores)));
            } catch (error) {
                console.dir(error, { depth: null })
                res.status(404);
                res.end();
            }
        } else {
            res.status(405);
            res.end();
        }
    });
}