module.exports = (sequelize, DataTypes) => {
    const Vehicle = sequelize.define('Vehicle', {
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

    Vehicle.associate = models => {
        Vehicle.belongsTo(models.VehicleType, {
            foreignKey: 'vehicle_type_id'
        });

        Vehicle.belongsTo(models.Brand, {
            foreignKey: 'brand_id'
        });

        Vehicle.belongsTo(models.VehicleCondition, {
            foreignKey: 'vehicle_condition_id'
        });

        Vehicle.belongsTo(models.VehicleTransmission, {
            foreignKey: 'vehicle_transmission_id'
        });

        Vehicle.belongsTo(models.VehicleFuel, {
            foreignKey: 'vehicle_fuel_id'
        });

        Vehicle.belongsTo(models.VehicleModel, {
            foreignKey: 'vehicle_model_id'
        });

        Vehicle.belongsToMany(models.Option, {
            through: models.VehicleOption
        });
    };

    return Vehicle;
};
