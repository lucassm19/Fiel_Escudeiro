'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('goblin_sheet', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING(50)
      },
      level: {
        type: Sequelize.INTEGER
      },
      occupation: {
        type: Sequelize.STRING(50)
      },
      characteristic: {
        type: Sequelize.TEXT
      },
      combat: {
        type: Sequelize.INTEGER
      },
      skill: {
        type: Sequelize.INTEGER
      },
      perception: {
        type: Sequelize.INTEGER
      },
      vitality: {
        type: Sequelize.INTEGER
      },
      equipment: {
        type: Sequelize.TEXT
      },
      wound: {
        type: Sequelize.TEXT
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('goblin_sheet');
  }
};
