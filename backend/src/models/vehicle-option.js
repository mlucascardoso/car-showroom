module.exports = (sequelize, DataTypes) => {
    const VehicleOption = sequelize.define('VehicleOption', {}, {});

    VehicleOption.associate = models => { };

    return VehicleOption;
};
