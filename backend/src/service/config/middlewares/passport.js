const { JWTStrategy } = require('@sap/xssec');
const xsenv = require('@sap/xsenv');
const passport = require('passport');

const AnonymousStrategy = require('../../helper/http/passport-noauth');
const { nodeEnv } = require('../setup/environment')();

module.exports = () => {
    let strategy = '';
    if (nodeEnv === 'localhost') {
        strategy = 'anonymous';
        passport.use(new AnonymousStrategy());
    } else {
        const service = xsenv.getServices({ uaa: {tag: 'xsuaa'} });

        strategy = 'JWT';
        passport.use('JWT', new JWTStrategy(service.uaa));
    }

    return {
        passport,
        strategy
    };
};


