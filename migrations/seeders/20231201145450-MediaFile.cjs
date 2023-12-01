'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('MediaFile', [
      {
        id: 1,
        originalName: 'firstFile.jpeg',
        URL: 'firstFile.jpeg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
        originalName: 'secondFile.jpeg',
        URL: 'secondFile.jpeg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 3,
        originalName: 'thirdFile.jpeg',
        URL: 'thirdFile.jpeg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 4,
        originalName: 'fourthFile.jpeg',
        URL: 'fourthFile.jpeg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 5,
        originalName: 'fifthFile.jpeg',
        URL: 'fifthFile.jpeg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('MediaFile', null, {});
    ``;
  },
};
