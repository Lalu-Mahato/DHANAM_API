module.exports = (sequelize, DataTypes) => {
    const prospect = sequelize.define(
        'prospect',
        {
            prospect_id: DataTypes.STRING,
            name: DataTypes.STRING,
            mobile_number: DataTypes.STRING,
            address: DataTypes.STRING,
            pincode: DataTypes.INTEGER,
            image_url: DataTypes.STRING,
        },
        {
            underscored: true,
            timestamps: true,
        },
    );
    prospect.associate = () => {
    // associations can be defined here
    };
    return prospect;
};
