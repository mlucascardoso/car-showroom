const express = require('express');

module.exports = () => {
    const app = express();

    require('./config/setup/express')(app);

    return app;
};
