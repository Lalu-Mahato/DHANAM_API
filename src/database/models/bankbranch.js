module.exports = (sequelize, DataTypes) => {
    const bankBranch = sequelize.define(
        'bankBranch',
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
        },
    );
    bankBranch.associate = () => {
        // associations can be defined here
    };
    return bankBranch;
};
