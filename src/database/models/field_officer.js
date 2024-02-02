module.exports = (sequelize, DataTypes) => {
    const field_officer = sequelize.define(
        'field_officer',
        {
            fo_id: DataTypes.STRING,
            name: DataTypes.STRING,
            mobile_number: DataTypes.STRING,
        },
        {
            underscored: true,
            timestamps: true,
        },
    );
    field_officer.associate = () => {
    // associations can be defined here
    };
    return field_officer;
};
