module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('vehicle_options', {
            vehicle_id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false
            },
            option_id: {
                allowNull: false,
                type: Sequelize.INTEGER
            },
            created_at: {
                type: Sequelize.DATE,
                allowNull: false
            },
            updated_at: {
                type: Sequelize.DATE,
                allowNull: true
            }
        }, {
            indexes: [
                { fields: ['description'] }
            ]
        });
    },
    down: queryInterface => {
        return queryInterface.dropTable('vehicle_options');
    }
};
