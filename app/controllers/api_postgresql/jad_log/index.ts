const JadLogModel = require('./lib');

interface App {
    post: any;
    get: any;
}

interface JadLog {
    identificacao?:             string,
    cep?:                       string,
    endereco?:                  string,
    bairro?:                    string,
    cidade?:                    string,
    estado?:                    string,
};

let jad_log: Array<JadLog> = [];

module.exports = (app: App) => {
    /**
    * @swagger
    * /jad_log:
    *   get:
    *     summary: Busca dados da jadlog
    *     description: Busca dados da jadlog em uma tabela específica, bot de rastreio
    *     tags:
    *       - JADLOG
    *     security:
    *       - bearerAuth: []
    *     produces:
    *       - application/json
    *       - text/csv
    *     responses:
    *       200:
    *         description: 'success'
    *       400:
    *         description: 'bad request'
    *       404:
    *         description: 'not found'
    */
    app.get('/jad_log', async (req: any, res: any) => {
        if (req.method === 'GET') {
            try {
                let jad_log = await JadLogModel.get(req);
                res.status(200).json(JSON.parse(JSON.stringify(jad_log)));
            } catch (error) {
                console.log("🚀 ~ file: index.ts:47 ~ app.get ~ error", error)
                res.status(404).json(JSON.parse(JSON.stringify(error)));
                res.end();
            }
        } else {
            res.end();
        }
    });
}