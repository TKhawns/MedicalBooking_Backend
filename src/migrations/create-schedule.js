'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('Schedule', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            current_number: {
                type: Sequelize.STRING,
            },
            max_number: {
                type: Sequelize.STRING,
            },
            date: {
                type: Sequelize.DATE,
            },
            time_type: {
                type: Sequelize.STRING,
            },
            doctor_id: {
                type: Sequelize.INTEGER,
            },
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('Schedule');
    },
};
