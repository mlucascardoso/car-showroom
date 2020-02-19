module.exports = (sequelize, DataTypes) => {
    const brands = sequelize.define('brands', {
        name: DataTypes.STRING(30)
    }, {});

    brands.associate = models => {};

    return brands;
};
