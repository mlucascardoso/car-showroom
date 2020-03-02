const getEnvVariables = require('../config/setup/environment');

const { database } = getEnvVariables();

const config = {
    development: {
        username: database.username,
        password: database.password,
        database: database.name,
        host: database.host,
        dialect: database.dialect,
        logging: database.logging
    },
    production: {
        username: database.username,
        password: database.password,
        database: database.name,
        host: database.host,
        dialect: database.dialect,
        logging: database.logging
    },
    test: {
        username: database.username,
        password: database.password,
        database: database.name,
        host: database.host,
        dialect: database.dialect,
        logging: database.logging
    },
};

module.exports = config;
