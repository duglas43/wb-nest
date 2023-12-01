'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('Characteristic', [
      {
        id: 1,
        name: 'Ширина упаковки',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
        name: 'Высота упаковки',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 3,
        name: 'Длина упаковки',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 4,
        name: 'Дата регистрации сертификата/декларации',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 5,
        name: 'Срок действия сертификата/декларации',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 6,
        name: 'Гарантийный срок',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 7,
        name: 'Производитель',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 8,
        name: 'Страна производства',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 9,
        name: 'Материал',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 10,
        name: 'Цвет',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 11,
        name: 'Вес',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 12,
        name: 'Ширина',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 13,
        name: 'Высота',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 14,
        name: 'Длина',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 15,
        name: 'Вес в упаковке',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 16,
        name: 'Количество в упаковке',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Characteristic', null, {});
    ``;
  },
};
