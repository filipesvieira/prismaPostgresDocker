'use strict';
const appRoot = require('app-root-path');
const walkSync = require('walk-sync');

module.exports = (app) => {
    const controllers = walkSync(`${appRoot}/app/controllers/`, {
        globs : ['**/*.ts'],
        ignore: ['index.ts', '**/lib/*.ts', '**/functions/*.ts']
    });
    controllers.forEach( ( Path ) => {
        require(`${appRoot}/app/controllers/${Path}`)(app);
    });
};