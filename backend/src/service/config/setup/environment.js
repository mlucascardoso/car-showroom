module.exports = () => {
    const nodeEnv = process.env.node_env;

    if (typeof nodeEnv === 'undefined' || nodeEnv === 'localhost') {
        require('dotenv-json-complex')();
    }

    const custom = JSON.parse(process.env.custom);
    const vcapServices = JSON.parse(process.env.VCAP_SERVICES);

    return {
        custom,
        hana: vcapServices['user-provided'][0],
        nodeEnv,
        port: custom.port,
        xsuaa: vcapServices['xsuaa'][0]
    };
};
