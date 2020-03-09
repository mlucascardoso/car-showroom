module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('brands', {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false
            },
            name: {
                type: Sequelize.STRING(30)
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
                { fields: ['name'] }
            ]
        });
    },
    down: queryInterface => {
        return queryInterface.dropTable('brands');
    }
};
