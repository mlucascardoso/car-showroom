module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('vehicles', {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false
            },
            vehicle_type_id: {
                type: Sequelize.INTEGER
            },
            brand_id: {
                type: Sequelize.INTEGER
            },
            vehicle_condition_id: {
                type: Sequelize.INTEGER
            },
            vehicle_transmission_id: {
                type: Sequelize.INTEGER
            },
            vehicle_fuel_id: {
                type: Sequelize.INTEGER
            },
            vehicle_model_id: {
                type: Sequelize.INTEGER
            },
            name: {
                type: Sequelize.STRING(30)
            },
            fabrication_year: {
                type: Sequelize.INTEGER
            },
            model_year: {
                type: Sequelize.INTEGER
            },
            price: {
                type: Sequelize.DECIMAL(10, 2)
            },
            mileage: {
                type: Sequelize.INTEGER
            },
            created_at: {
                type: Sequelize.DATE,
                allowNull: false
            },
            updated_at: {
                type: Sequelize.DATE,
                allowNull: true,
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
