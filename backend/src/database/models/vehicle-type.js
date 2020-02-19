module.exports = (sequelize, DataTypes) => {
    const vehicleTypes = sequelize.define('vehicleTypes', {
        description: DataTypes.STRING(100)
    }, {});

    vehicleTypes.associate = models => {};

    return vehicleTypes;
};
