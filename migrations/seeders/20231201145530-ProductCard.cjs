'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('ProductCard', [
      {
        imtId: 1,
        object: 'Рубашка Мужская',
        nmId: 123213,
        vendorCode: 'some_1',
        isProhibitet: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        imtId: 2,
        object: 'Котёл печной',
        nmId: 12355213,
        vendorCode: 'some_2',
        isProhibitet: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        imtId: 3,
        object: 'Перчатки',
        nmId: 12332213,
        vendorCode: 'some_3',
        isProhibitet: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('ProductCard', null, {});
    ``;
  },
};
