const { Router } = require('express');
const { readdirSync } = require('fs');
const { join } = require('path');

const routes = () => {
    const dir = join(__dirname, './routes');
    const routesFn = readdirSync(dir);
    const routes = Object.keys(routesFn).map((key) => require(join(dir, routesFn[key])));

    return routes;
};

module.exports = () => {
    const app = Router();
    routes().forEach((route) => route(app));

    return app;
};
