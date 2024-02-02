module.exports = (sequelize, DataTypes) => {
    const product = sequelize.define(
        'product',
        {
            code: DataTypes.INTEGER,
            name: DataTypes.STRING,
        },
        {
            underscored: true,
            timestamps: true,
        },
    );
    product.associate = () => {
    // associations can be defined here
    };
    return product;
};
