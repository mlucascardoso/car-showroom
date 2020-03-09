const passport = require('passport');

const AnonymousStrategy = require('../../helpers/http/passport-noauth');
// const { nodeEnv } = require('../setup/environment')();

module.exports = () => {
    let strategy = '';
    // if (nodeEnv === 'localhost') {
    strategy = 'anonymous';
    passport.use(new AnonymousStrategy());
    // } else {
    // passport.use('JWT', new JWTStrategy(service.uaa));
    // }

    return {
        passport,
        strategy
    };
};


