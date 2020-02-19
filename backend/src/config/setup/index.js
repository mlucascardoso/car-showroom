const setupExpress = require('./express');

module.exports = (app) => {
    setupExpress(app);

    console.log('✌️ Express loaded');
};
