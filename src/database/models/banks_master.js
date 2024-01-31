module.exports = (sequelize, DataTypes) => {
    const banks_master = sequelize.define(
        'banks_master',
        {
            code: DataTypes.INTEGER,
            name: DataTypes.STRING,
            address: DataTypes.STRING,
            city: DataTypes.STRING,
            state: DataTypes.STRING,
            country: DataTypes.STRING,
        },
        {
            underscored: true,
            timestamps: true,
        },
    );
    banks_master.associate = () => {
    // associations can be defined here
    };
    return banks_master;
};
