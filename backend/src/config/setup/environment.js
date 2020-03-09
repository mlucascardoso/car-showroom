module.exports = () => {
    const environment = typeof process.env.node_env === undefined ? '' : process.env.node_env;

    require('dotenv-json-complex')({ environment });

    const custom = JSON.parse(process.env.custom);

    return {
        custom,
        nodeEnv: environment,
        port: custom.port,
        database: custom.database
    };
};
