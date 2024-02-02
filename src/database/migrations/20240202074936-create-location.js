module.exports = {
    up: (queryInterface, Sequelize) => queryInterface.createTable('locations', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER,
        },
        latitude: {
            type: Sequelize.STRING,
        },
        longitude: {
            type: Sequelize.STRING,
        },
        location: {
            type: Sequelize.STRING,
        },
        state: {
            type: Sequelize.STRING,
        },
        country: {
            type: Sequelize.STRING,
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
    down: (queryInterface) => queryInterface.dropTable('locations'),
};
