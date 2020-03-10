module.exports = (sequelize, DataTypes) => {
    const VehicleTransmission = sequelize.define('VehicleTransmission', {
        description: DataTypes.STRING(30)
    }, {});

    VehicleTransmission.associate = models => { };

    return VehicleTransmission;
};
