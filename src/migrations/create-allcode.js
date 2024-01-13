'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('Allcode', {
            key: {
                type: Sequelize.STRING,
            },
            type: {
                type: Sequelize.STRING,
            },
            value: {
                type: Sequelize.STRING,
            },
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('Allcode');
    },
};
