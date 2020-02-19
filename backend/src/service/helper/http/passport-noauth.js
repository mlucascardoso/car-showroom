const passport = require('passport-strategy');
const util = require('util');

/**
 * @void
 */
function Strategy() {
    passport.Strategy.call(this);
    this.name = 'anonymous';
};

util.inherits(Strategy, passport.Strategy);

Strategy.prototype.authenticate = function () {
    this.pass();
};

module.exports = Strategy;
