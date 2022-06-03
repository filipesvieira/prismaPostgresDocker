import { PrismaClient } from "@prisma/client";

/**
* @swagger
* components:
*
*   schemas:
*
*     jogadorData:
*         type: array
*         items:
*           type: object
*           properties:
*             nome:
*               type: string
*               required: true
*             posicao:
*               type: string
*               required: true
*             altura:
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

interface Jogador {
    nome?: string,
    posicao?: string,
    altura?: string,
    peso?: string,
};

let jogadores: Array<Jogador> = [];

module.exports = (app: App) => {
    /**
    * @swagger
    * /jogador:
    *   post:
    *     summary: Inserta novos jogadores
    *     description: Endpoint que recebe array de objetos com os dados de jogadores que serão inseridos na base de dados
    *     tags:
    *       - JOGADOR
    *     security:
    *       - bearerAuth: []
    *     produces:
    *       - application/json
    *     requestBody:
    *         description: "Array de objetos para insertar novos jogadores"
    *         required: true
    *         content:
    *           application/json:
    *             schema:
    *               $ref: "#/components/schemas/jogadorData"
    *     responses:
    *       200:
    *         description: "success"
    *       400:
    *         description: "bad request"
    */
    app.post('/jogador', async (req: any, res: any) => {
        let prisma: PrismaClient;
        prisma = new PrismaClient();
        if (req.method === 'POST') {
            try {
                let jogadores = await prisma.jogador.createMany({
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
    * /jogador:
    *   get:
    *     summary: Busca dados dos jogadores
    *     description: Busca dados dos jogadores já cadastrados na base de dados de acordo com os parâmetros enviados
    *     tags:
    *       - JOGADOR
    *     security:
    *       - bearerAuth: []
    *     produces:
    *       - application/json
    *     parameters:
    *       - name: nome
    *         in: query
    *         description: "Nome do jogador"
    *         required: false
    *         type: string
    *       - name: posicao
    *         in: query
    *         description: "Posição do jogador"
    *         required: false
    *         type: string
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