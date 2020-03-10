module.exports = (sequelize, DataTypes) => {
    const Brand = sequelize.define('Brand', {
        name: DataTypes.STRING(30)
    }, {});

    Brand.associate = models => { };

    return Brand;
};
