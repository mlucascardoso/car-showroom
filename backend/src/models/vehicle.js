module.exports = (sequelize, DataTypes) => {
    const vehicles = sequelize.define('vehicles', {
        vehicleTypeId: DataTypes.INTEGER,
        brandId: DataTypes.INTEGER,
        vehicleConditionId: DataTypes.INTEGER,
        vehicleTransmissionId: DataTypes.INTEGER,
        vehicleFuelId: DataTypes.INTEGER,
        vehicleModelId: DataTypes.INTEGER,
        name: DataTypes.STRING(30),
        fabricationYear: DataTypes.INTEGER,
        modelYear: DataTypes.INTEGER,
        price: DataTypes.DECIMAL(10, 2),
        mileage: DataTypes.INTEGER
    }, {});

    vehicles.associate = models => {
        vehicles.belongsTo(models.vehicleTypes, {
            foreignKey: 'vehicleTypeId'
        });

        vehicles.belongsTo(models.brands, {
            foreignKey: 'brandId'
        });

        vehicles.belongsTo(models.vehicleConditions, {
            foreignKey: 'vehicleConditionId'
        });

        vehicles.belongsTo(models.vehicleTransmissions, {
            foreignKey: 'vehicleTransmissionId'
        });

        vehicles.belongsTo(models.vehicleFuels, {
            foreignKey: 'vehicleFuelId'
        });

        vehicles.belongsTo(models.vehicleModels, {
            foreignKey: 'vehicleModelId'
        });

        vehicles.belongsToMany(models.options, {
            through: models.vehicleOptions
        });
    };

    return vehicles;
};
