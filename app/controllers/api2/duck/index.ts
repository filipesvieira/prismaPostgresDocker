import { PrismaClient } from "@prisma/client";

/**
* @swagger
* components:
*   schemas:
*     patoData:
*         type: array
*         items:
*           type: object
*           properties:
*             nome:
*               type: string
*               required: true
*             peso:
*               type: string
*               required: true
*/

interface App {
    post: any;
    get: any;
}

interface Pato {
    nome?: string,
    peso?: string,
};

let patos: Array<Pato> = [];

module.exports = (app: App) => {
    /**
    * @swagger
    * /duck:
    *   post:
    *     summary: Inserta novos patos
    *     description: Endpoint que recebe array de objetos com os dados de patos que serão inseridos na base de dados
    *     tags:
    *       - PATO DUCK
    *     security:
    *       - bearerAuth: []
    *     produces:
    *       - application/json
    *     requestBody:
    *         description: "Array de objetos para insertar novos patos"
    *         required: true
    *         content:
    *           application/json:
    *             schema:
    *               $ref: "#/components/schemas/patoData"
    *     responses:
    *       200:
    *         description: "success"
    *       400:
    *         description: "bad request"
    */
    app.post('/duck', async (req: any, res: any) => {
        let prisma: PrismaClient;
        prisma = new PrismaClient();
        if (req.method === 'POST') {
            try {
                let jogadores = await prisma.pato.createMany({
                    data: req.body,
                    skipDuplicates: true,
                });
                res.status(200).json(JSON.parse(JSON.stringify(jogadores)));
            } catch (error) {
				console.log("TCL: error", error)
                res.status(404).json(JSON.parse(JSON.stringify(error)));
                res.end();
            }
        } else {
            res.status(405);
            res.end();
        }
    });

    /**
    * @swagger
    * /duck:
    *   get:
    *     summary: Busca dados dos patos
    *     description: Busca dados dos patos já cadastrados na base de dados de acordo com os parâmetros enviados
    *     tags:
    *       - PATO DUCK
    *     security:
    *       - bearerAuth: []
    *     produces:
    *       - application/json
    *     parameters:
    *       - name: nome
    *         in: query
    *         description: "Nome do duck"
    *         required: false
    *         type: string
    *       - name: posicao
    *         in: query
    *         description: "Posição do duck"
    *         required: false
    *         type: string
    *     responses:
    *       200:
    *         description: "success"
    *       400:
    *         description: "bad request"
    */
    app.get('/duck', async (req: any, res: any) => {
        let prisma: PrismaClient;
        prisma = new PrismaClient();
        if (req.method === 'GET') {
            try {
                let jogadores = await prisma.pato.findMany();
                res.status(200).json(JSON.parse(JSON.stringify(jogadores)));
            } catch (error) {
                res.status(404).json(JSON.parse(JSON.stringify(error)));
                res.end();
            }
        } else {
            res.status(405);
            res.end();
        }
    });
}