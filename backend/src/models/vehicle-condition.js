module.exports = (sequelize, DataTypes) => {
    const VehicleCondition = sequelize.define('VehicleCondition', {
        description: DataTypes.STRING(50)
    }, {});

    VehicleCondition.associate = models => { };

    return VehicleCondition;
};
