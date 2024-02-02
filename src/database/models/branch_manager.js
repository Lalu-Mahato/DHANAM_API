module.exports = (sequelize, DataTypes) => {
    const branch_manager = sequelize.define(
        'branch_manager',
        {
            bm_id: DataTypes.STRING,
            name: DataTypes.STRING,
            mobile_number: DataTypes.STRING,
        },
        {
            underscored: true,
            timestamps: true,
        },
    );
    branch_manager.associate = () => {
    // associations can be defined here
    };
    return branch_manager;
};
