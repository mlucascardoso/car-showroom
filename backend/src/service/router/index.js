const { Router } = require('express');
const { join } = require('path');
const requireDir = require('require-dir');

const routes = () => {
    const routesFn = requireDir(join(__dirname, './routes'));
    const routes = Object.keys(routesFn).map((key) => routesFn[key]);

    return routes;
};

module.exports = () => {
    const app = Router();
    routes().forEach((route) => route(app));

    return app;
};
