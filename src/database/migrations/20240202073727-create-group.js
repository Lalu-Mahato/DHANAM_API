module.exports = {
    up: (queryInterface, Sequelize) => queryInterface.createTable('groups', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER,
        },
        group_id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            unique: true,
        },
        name: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        head_name: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        head_photo: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        head_mobile_number: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        created_at: {
            allowNull: false,
            type: Sequelize.DATE,
        },
        updated_at: {
            allowNull: false,
            type: Sequelize.DATE,
        },
    }),
    down: (queryInterface) => queryInterface.dropTable('groups'),
};
