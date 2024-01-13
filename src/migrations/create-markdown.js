'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('Markdown', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            doctor_id: {
                type: Sequelize.INTEGER,
            },
            clinic_id: {
                type: Sequelize.INTEGER,
            },
            specialty_id: {
                type: Sequelize.INTEGER,
            },
            content_html: {
                type: Sequelize.STRING,
            },
            content_markdown: {
                type: Sequelize.STRING,
            },
            description: {
                type: Sequelize.STRING,
            },
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('Markdown');
    },
};
