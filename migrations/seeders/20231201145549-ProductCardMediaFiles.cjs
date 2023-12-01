'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('ProductCardMediaFiles', [
      {
        productCardImtId: 1,
        mediaFileId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        productCardImtId: 2,
        mediaFileId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        productCardImtId: 3,
        mediaFileId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('ProductCardMediaFiles', null, {});
    ``;
  },
};
