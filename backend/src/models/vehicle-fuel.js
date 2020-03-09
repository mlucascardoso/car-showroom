module.exports = (sequelize, DataTypes) => {
    const vehicleFuels = sequelize.define('vehicleFuels', {
        description: DataTypes.STRING(20)
    }, {});

    vehicleFuels.associate = models => {};

    return vehicleFuels;
};
