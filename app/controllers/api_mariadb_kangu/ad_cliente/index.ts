const AdClienteModel = require('./lib');

interface App {
    post: any;
    get: any;
}

interface AdCliente {
    nome?:            string,
    apelido?:         string,
    codigo?:          string,
    registro?:        string,
    reg_est?:         string,
    email?:           string,
    telefone?:        string,
    celular?:         string,
    fax?:             string,
};

let adCliente: Array<AdCliente> = [];

module.exports = (app: App) => {
    /**
    * @swagger
    * /ad-cliente:
    *   post:
    *     summary: Inserta novos clientes
    *     description: Endpoint que recebe array de objetos com os dados de clientes que serão inseridos na base de dados
    *     tags:
    *       - AD_CLIENTE
    *     security:
    *       - bearerAuth: []
    *     produces:
    *       - application/json
    *     requestBody:
    *         description: 'Array de objetos para insertar novos clientes'
    *         required: true
    *         content:
    *           application/json:
    *             schema:
    *               $ref: '#/components/schemas/adClienteData'
    *     responses:
    *       200:
    *         description: 'success'
    *       400:
    *         description: 'bad request'
    *       404:
    *         description: 'not found'
    */
    app.post('/ad-cliente', async (req: any, res: any) => {
        if (req.method === 'POST') {
            try {
                let adCliente = await AdClienteModel.insert(req);
                res.status(200).json(JSON.parse(JSON.stringify(adCliente)));
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
    * /ad-cliente:
    *   get:
    *     summary: Busca dados dos clientes
    *     description: Busca dados dos clientes já cadastrados na base de dados de acordo com os parâmetros enviados
    *     tags:
    *       - AD_CLIENTE
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
    app.get('/ad-cliente', async (req: any, res: any) => {
        if (req.method === 'GET') {
            try {
                let adCliente = await AdClienteModel.get(req);
                res.status(200).json(JSON.parse(JSON.stringify(adCliente)));
            } catch (error) {
                res.status(404).json(JSON.parse(JSON.stringify(error)));
                res.end();
            }
        } else {
            res.end();
        }
    });
}