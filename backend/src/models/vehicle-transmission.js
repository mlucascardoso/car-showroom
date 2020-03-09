module.exports = (sequelize, DataTypes) => {
    const vehicleTransmissions = sequelize.define('vehicleTransmissions', {
        description: DataTypes.STRING(30)
    }, {});

    vehicleTransmissions.associate = models => {};

    return vehicleTransmissions;
};
