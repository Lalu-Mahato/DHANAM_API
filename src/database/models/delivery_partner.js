module.exports = (sequelize, DataTypes) => {
    const delivery_partner = sequelize.define(
        'delivery_partner',
        {
            code: DataTypes.INTEGER,
            name: DataTypes.STRING,
        },
        {
            underscored: true,
            timestamps: true,
        },
    );
    delivery_partner.associate = () => {
    // associations can be defined here
    };
    return delivery_partner;
};
