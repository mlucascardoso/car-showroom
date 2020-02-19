module.exports = (sequelize, DataTypes) => {
    const vehicleOptions = sequelize.define('vehicleOptions', {}, {});

    vehicleOptions.associate = models => {};

    return vehicleOptions;
};
