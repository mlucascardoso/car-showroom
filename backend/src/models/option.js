module.exports = (sequelize, DataTypes) => {
    const Option = sequelize.define('Option', {
        description: DataTypes.STRING(100)
    }, {});

    Option.associate = models => {
        Option.belongsToMany(models.Vehicle, {
            through: models.VehicleOption
        });
    };

    return Option;
};
