'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('ProductCardCharacteristics', [
      {
        productCardImtId: 1,
        characteristicId: 1,
        value: '25',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        productCardImtId: 1,
        characteristicId: 2,
        value: '40',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        productCardImtId: 1,
        characteristicId: 3,
        value: '30',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        productCardImtId: 1,
        characteristicId: 4,
        value: '25.10.1234',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        productCardImtId: 1,
        characteristicId: 8,
        value: 'Китай',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        productCardImtId: 2,
        characteristicId: 1,
        value: '25',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        productCardImtId: 2,
        characteristicId: 2,
        value: '40',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        productCardImtId: 2,
        characteristicId: 3,
        value: '30',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        productCardImtId: 2,
        characteristicId: 4,
        value: '25.10.1234',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        productCardImtId: 2,
        characteristicId: 8,
        value: 'Россия',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        productCardImtId: 3,
        characteristicId: 1,
        value: '25',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        productCardImtId: 3,
        characteristicId: 2,
        value: '40',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        productCardImtId: 3,
        characteristicId: 3,
        value: '30',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        productCardImtId: 3,
        characteristicId: 4,
        value: '25.10.1234',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        productCardImtId: 3,
        characteristicId: 8,
        value: 'Россия',
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
