'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'categories',
      [
        {
          id: 1,
          name: 'Smartphone',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 2,
          name: 'CPU',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 3,
          name: 'Graphic card',
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {},
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('categories', null, {});
  }
};
