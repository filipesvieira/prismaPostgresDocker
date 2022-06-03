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
const OPT_Api2  = {
    swaggerOptions   : {validatorUrl : null},
    swaggerDefinition: SWG_YAML.API2,
    apis             : [`${appRoot}/app/controllers/swagger.js`, `${appRoot}/app/controllers/api2/**/*.ts`]
};
const swagger = ( app ) => {
    app.use(`/`, express.static(`${appRoot}/public/swagger-ui-dist`));
    app.get('/api', (req, res) => {
        const SWG_API   = SWG_JSDOC( OPT_Api );
        SWG_API.schemes = ( ( process.env.SECURE === 'true' ) ? ['https'] : ['http'] );
        res.setHeader('Content-Type', 'application/json');
        res.send( SWG_API );
    });
    app.get('/api2', (req, res) => {
        const SWG_API2   = SWG_JSDOC( OPT_Api2 );
        SWG_API2.schemes = ( ( process.env.SECURE === 'true' ) ? ['https'] : ['http'] );
        res.setHeader('Content-Type', 'application/json');
        res.send( SWG_API2 );
    });
};

module.exports = swagger;