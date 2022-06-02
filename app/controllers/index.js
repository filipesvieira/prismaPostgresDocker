'use strict';
const appRoot = require('app-root-path');
const walkSync = require('walk-sync');

module.exports = (app) => {
    const controllers = walkSync(`${appRoot}/app/controllers/api`, {
        globs : ['**/*.ts'],
        ignore: ['index.ts', '**/lib/*.ts']
    });
    controllers.forEach( ( Path ) => {
		console.log("TCL: Path", Path)
        require(`${appRoot}/app/controllers/api/${Path}`)(app);
    });
};