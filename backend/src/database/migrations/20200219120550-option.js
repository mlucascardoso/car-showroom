module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('options', {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false
            },
            description: {
                type: Sequelize.STRING(100)
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
        return queryInterface.dropTable('options');
    }
};
