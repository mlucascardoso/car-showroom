module.exports = (sequelize, DataTypes) => {
    const VehicleType = sequelize.define('VehicleType', {
        description: DataTypes.STRING(100)
    }, {});

    VehicleType.associate = models => { };

    return VehicleType;
};
