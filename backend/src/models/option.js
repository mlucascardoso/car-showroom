module.exports = (sequelize, DataTypes) => {
    const options = sequelize.define('options', {
        description: DataTypes.STRING(100)
    }, {});

    options.associate = models => {
        options.belongsToMany(models.vehicles, {
            through: models.vehicleOptions
        });
    };

    return options;
};
