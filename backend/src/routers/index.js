const { Router } = require('express');
const { readdirSync } = require('fs');
const { join } = require('path');

const routes = () => {
    const dir = join(__dirname, '../routers');
    const scannedDir = readdirSync(dir).filter(dir => dir !== 'index.js');

    let routes = [];
    if (scannedDir) {
        routes = Object.keys(scannedDir).map((key) => require(join(dir, scannedDir[key], 'routes.js')));
    }

    return routes;
};

module.exports = () => {
    const app = Router();
    routes().forEach((route) => route(app));

    return app;
};
