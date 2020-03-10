module.exports = (sequelize, DataTypes) => {
    const VehicleModel = sequelize.define('VehicleModel', {
        description: DataTypes.STRING(100)
    }, {});

    VehicleModel.associate = models => { };

    return VehicleModel;
};
