const { database } = require('./environment')();

module.exports = {
    host: database.host,
    username: database.username,
    password: database.password,
    database: database.name,
    dialect: database.dialect,
    storage: './__tests__/database.sqlite',
    operatorAliases: false,
    logging: false,
    define: {
        timestamps: true,
        underscored: true,
        underscoredAll: true
    }
};
