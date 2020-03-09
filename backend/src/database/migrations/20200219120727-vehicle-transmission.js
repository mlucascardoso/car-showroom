module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('vehicle_transmissions', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            description: {
                type: Sequelize.STRING(30)
            },
            created_at: {
                allowNull: false,
                type: Sequelize.DATE,
                field: 'created_at'
            },
            updated_at: {
                allowNull: true,
                type: Sequelize.DATE,
                field: 'updated_at'
            }
        }, {
            indexes: [
                { fields: ['description'] }
            ]
        });
    },
    down: queryInterface => {
        return queryInterface.dropTable('vehicle_transmissions');
    }
};
