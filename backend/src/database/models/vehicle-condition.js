module.exports = (sequelize, DataTypes) => {
    const vehicleConditions = sequelize.define('vehicleConditions', {
        description: DataTypes.STRING(50)
    }, {});

    vehicleConditions.associate = models => {};

    return vehicleConditions;
};
