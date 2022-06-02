/**
* @swagger
* components:
*
*   schemas:
*     time:
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

module.exports = (app: App) => {
    /**
    * @swagger
    * /time:
    *   post:
    *     summary: SUMMARY
    *     description: DESCRIPTION
    *     tags:
    *       - TIME
    *     security:
    *       - bearerAuth: []
    *     produces:
    *       - application/json
    *     parameters:
    *       - in: body
    *         name: body
    *         description: "Endpoint para insertar um novo time"
    *         required: true
    *         schema:
    *           "$ref": "#/components/schemas/time"
    *     responses:
    *       200:
    *         description: "success"
    *       400:
    *         description: "bad request"
    */
    app.post('/time', (req: any, res: any) => {
        res.status(200).send(`TIME POST`);
    });

    /**
    * @swagger
    * /time:
    *   get:
    *     summary: SUMMARY
    *     description: DESCRIPTION
    *     tags:
    *       - TIME
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
    app.get('/time', (req: any, res: any) => {
        res.status(200).send(`TIME GET`);
    });
}