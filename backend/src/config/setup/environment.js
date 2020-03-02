module.exports = () => {
    const nodeEnv = process.env.node_env;

    if (typeof nodeEnv === 'undefined' || nodeEnv === 'localhost') {
        require('dotenv-json-complex')();
    }

    const custom = JSON.parse(process.env.custom);

    return {
        custom,
        nodeEnv,
        port: custom.port,
        database: custom.database
    };
};
