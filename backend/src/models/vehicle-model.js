module.exports = (sequelize, DataTypes) => {
    const vehicleModels = sequelize.define('vehicleModels', {
        description: DataTypes.STRING(100)
    }, {});

    vehicleModels.associate = models => {};

    return vehicleModels;
};
