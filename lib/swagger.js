'use strict';
const express   = require('express');
const appRoot   = require('app-root-path');
const YAML      = require('yamljs');
const SWG_JSDOC = require('swagger-jsdoc');
const SWG_YAML  = YAML.load('./config/swagger.yaml');
const fs = require('fs')

const swagger = async ( app ) => {
    app.use(`/`, express.static(`${appRoot}/public/swagger-ui-dist`));
    let foldersApis = `${appRoot}/app/controllers/`
    const getDirectories = (path) => {
        return fs.readdirSync(path).filter(function (file) {
            return fs.statSync(path + '/' + file).isDirectory();
        });
    }
    let arrayFoldersApi = getDirectories(foldersApis)
    Object.keys(arrayFoldersApi).forEach(async (folder) => {
        const OPT_Api = {
            swaggerOptions: { validatorUrl: null },
            swaggerDefinition: SWG_YAML[arrayFoldersApi[folder]],
            apis: [`${appRoot}/app/controllers/swagger.js`, `${appRoot}/app/controllers/${arrayFoldersApi[folder]}/**/*.ts`]
        };
        app.get('/' + arrayFoldersApi[folder], (req, res) => {
            const SWG_API = SWG_JSDOC(OPT_Api);
            SWG_API.schemes = ((process.env.SECURE === 'true') ? ['https'] : ['http']);
            res.setHeader('Content-Type', 'application/json');
            res.send(SWG_API);
        })
    });
};

module.exports = swagger;