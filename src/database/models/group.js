module.exports = (sequelize, DataTypes) => {
    const group = sequelize.define(
        'group',
        {
            group_id: DataTypes.STRING,
            name: DataTypes.STRING,
            head_name: DataTypes.STRING,
            head_photo: DataTypes.STRING,
            head_mobile_number: DataTypes.STRING,
        },
        {
            underscored: true,
            timestamps: true,
        },
    );
    group.associate = () => {
    // associations can be defined here
    };
    return group;
};
