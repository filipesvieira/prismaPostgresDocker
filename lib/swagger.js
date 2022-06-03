'use strict';
const express   = require('express');
const appRoot   = require('app-root-path');
const YAML      = require('yamljs');
const SWG_JSDOC = require('swagger-jsdoc');
const SWG_YAML  = YAML.load('./config/swagger.yaml');
const OPT_Api  = {
    swaggerOptions   : {validatorUrl : null},
    swaggerDefinition: SWG_YAML.API,
    apis             : [`${appRoot}/app/controllers/swagger.js`, `${appRoot}/app/controllers/api/**/*.ts`]
};
const swagger = ( app ) => {
    app.use(`/`, express.static(`${appRoot}/public/swagger-ui-dist`));
    app.get('/api', (req, res) => {
        const SWG_API   = SWG_JSDOC( OPT_Api );
        SWG_API.schemes = ( ( process.env.SECURE === 'true' ) ? ['https'] : ['http'] );
        res.setHeader('Content-Type', 'application/json');
        res.send( SWG_API );
    });
};

module.exports = swagger;