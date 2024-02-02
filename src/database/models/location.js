module.exports = (sequelize, DataTypes) => {
    const location = sequelize.define(
        'location',
        {
            latitude: DataTypes.STRING,
            longitude: DataTypes.STRING,
            location: DataTypes.STRING,
            state: DataTypes.STRING,
            country: DataTypes.STRING,
        },
        {
            underscored: true,
            timestamps: true,
        },
    );
    location.associate = () => {
    // associations can be defined here
    };
    return location;
};
