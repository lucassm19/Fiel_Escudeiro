'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('goblin_sheet', [
      {
        name: 'Gork',
        level: 5,
        // ... outros atributos
      },
      {
        name: 'Mork',
        level: 3,
        // ... outros atributos
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('goblin_sheet', null, {});
  }
};
