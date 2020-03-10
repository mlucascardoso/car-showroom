module.exports = (sequelize, DataTypes) => {
    const VehicleFuel = sequelize.define('VehicleFuel', {
        description: DataTypes.STRING(20)
    }, {});

    VehicleFuel.associate = models => { };

    return VehicleFuel;
};
