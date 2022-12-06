const EtiquetaModel = require('./lib');

interface App {
    post: any;
    get: any;
}

interface Etiqueta {
    nome?:              string,
    id_pedido?:         number,
    id_integ_pedido?:   number,
    id_pessoa?:         number,
    id_pessoa_origem?:  number,
    status?:            string,
    dh_inc?:            Date,
    dh_conc?:           Date,
    quantidade?:        number,
};

let etiqueta: Array<Etiqueta> = [];

module.exports = (app: App) => {
    /**
    * @swagger
    * /etiqueta:
    *   post:
    *     summary: Inserta novas etiquetas
    *     description: Endpoint que recebe array de objetos com os dados de etiquetas que serão inseridas na base de dados
    *     tags:
    *       - ETIQUETA
    *     security:
    *       - bearerAuth: []
    *     produces:
    *       - application/json
    *       - text/html
    *     requestBody:
    *         description: 'Array de objetos para insertar novas etiquetas'
    *         required: true
    *         content:
    *           application/json:
    *             schema:
    *               $ref: '#/components/schemas/etiquetaData'
    *     responses:
    *       200:
    *         description: 'success'
    *       400:
    *         description: 'bad request'
    *       404:
    *         description: 'not found'
    */
    app.post('/etiqueta', async (req: any, res: any) => {
        if (req.method === 'POST') {
            try {
                let etiqueta = await EtiquetaModel.insert(req);
                res.status(200).json(JSON.parse(JSON.stringify(etiqueta)));
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
    * /etiqueta:
    *   get:
    *     summary: Busca dados dos etiquetas
    *     description: Busca dados dos etiquetas já cadastrados na base de dados de acordo com os parâmetros enviados
    *     tags:
    *       - ETIQUETA
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
    app.get('/etiqueta', async (req: any, res: any) => {
        if (req.method === 'GET') {
            try {
                let etiqueta = await EtiquetaModel.get(req);
                res.status(200).json(JSON.parse(JSON.stringify(etiqueta)));
            } catch (error) {
                res.status(404).json(JSON.parse(JSON.stringify(error)));
                res.end();
            }
        } else {
            res.end();
        }
    });
}