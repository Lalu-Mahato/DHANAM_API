module.exports = (sequelize, DataTypes) => {
    const bank = sequelize.define(
        'bank',
        {
            code: DataTypes.INTEGER,
            name: DataTypes.STRING,
            icon_url: DataTypes.STRING,
        },
        {
            underscored: true,
            timestamps: true,
        },
    );
    bank.associate = () => {
    // associations can be defined here
    };
    return bank;
};
