const bodyParser = require('body-parser');

const routes = require('../../routers');
const { passport, strategy } = require('../middlewares/passport')();
const { nodeEnv, custom } = require('./environment')();

module.exports = (app) => {
    if (nodeEnv === 'localhost') {
        const cors = require('cors');
        app.use(cors());
    }

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    // security
    app.use(passport.initialize());
    app.use(passport.authenticate(strategy, { session: false }));

    // Load API routes
    app.use(custom.api.prefix, routes());
};
