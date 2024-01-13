'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('Doctor_info', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            doctor_id: {
                type: Sequelize.INTEGER,
            },
            price_id: {
                type: Sequelize.INTEGER,
            },
            province_id: {
                type: Sequelize.INTEGER,
            },
            payment_id: {
                type: Sequelize.INTEGER,
            },
            address_clinic: {
                type: Sequelize.STRING,
            },
            name_clinic: {
                type: Sequelize.STRING,
            },
            note: {
                type: Sequelize.STRING,
            },
            count: {
                type: Sequelize.INTEGER,
            },
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('Doctor_info');
    },
};
