module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('vehicles', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            vehicleTypeId: {
                type: Sequelize.INTEGER,
                field: 'vehicle_type_id'
            },
            brandId: {
                type: Sequelize.INTEGER,
                field: 'brand_id'
            },
            vehicleConditionId: {
                type: Sequelize.INTEGER,
                field: 'vehicle_condition_id'
            },
            vehicleTransmissionId: {
                type: Sequelize.INTEGER,
                field: 'vehicle_transmission_id'
            },
            vehicleFuelId: {
                type: Sequelize.INTEGER,
                field: 'vehicle_fuel_id'
            },
            vehicleModelId: {
                type: Sequelize.INTEGER,
                field: 'vehicle_model_id'
            },
            name: {
                type: Sequelize.STRING(30)
            },
            fabricationYear: {
                type: Sequelize.INTEGER,
                field: 'fabrication_year'
            },
            modelYear: {
                type: Sequelize.INTEGER,
                field: 'model_year'
            },
            price: {
                type: Sequelize.DECIMAL(10, 2)
            },
            mileage: {
                type: Sequelize.INTEGER
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE,
                field: 'created_at'
            },
            updatedAt: {
                allowNull: true,
                type: Sequelize.DATE,
                field: 'updated_at'
            }
        }, {
            indexes: [
                { fields: ['name'] },
                { fields: ['fabrication_year'] },
                { fields: ['model_year'] },
                { fields: ['price'] },
                { fields: ['mileage'] }
            ]
        });
    },
    down: queryInterface => {
        return queryInterface.dropTable('vehicles');
    }
};
