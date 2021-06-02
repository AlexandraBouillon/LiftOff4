'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Supplies', [
{supplyName: 'Flour', quantity: 1, measurementUnitId: 1 ,projectId: 1, createdAt: new Date(), updatedAt: new Date()},
{supplyName: 'Salt', quantity: 1, measurementUnitId: 2 ,projectId: 2, createdAt: new Date(), updatedAt: new Date()},
{supplyName: 'Tomato', quantity: 1, measurementUnitId: 3 ,projectId: 3, createdAt: new Date(), updatedAt: new Date()},
{supplyName: 'Pork Pate', quantity: 1, measurementUnitId: 4 ,projectId: 4, createdAt: new Date(), updatedAt: new Date()},
{supplyName: 'Cilantro', quantity: 1, measurementUnitId: 5 ,projectId: 5, createdAt: new Date(), updatedAt: new Date()},
{supplyName: 'Carrot', quantity: 1, measurementUnitId: 6 ,projectId: 6, createdAt: new Date(), updatedAt: new Date()},
{supplyName: 'Water', quantity: 1, measurementUnitId: 7 ,projectId: 7, createdAt: new Date(), updatedAt: new Date()},
{supplyName: 'Spinach', quantity: 1, measurementUnitId: 8 ,projectId: 8, createdAt: new Date(), updatedAt: new Date()},
{supplyName: 'Cauliflower', quantity: 1, measurementUnitId: 9 ,projectId: 9, createdAt: new Date(), updatedAt: new Date()},
    ], {});
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
    */
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Supplies', null, {});
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
    */
  }
};
