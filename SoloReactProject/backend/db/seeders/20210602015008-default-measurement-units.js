'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('MeasurementUnits', [
{ measurementUnitName: 'n/a', createdAt: new Date(), updatedAt: new Date() },
{ measurementUnitName: 'cup(s)', createdAt: new Date(), updatedAt: new Date() },
{ measurementUnitName: 'fluid ounce(s)', createdAt: new Date(), updatedAt: new Date() },
{ measurementUnitName: 'gallon(s)', createdAt: new Date(), updatedAt: new Date() },
{ measurementUnitName: 'gram(s)', createdAt: new Date(), updatedAt: new Date() },
{ measurementUnitName: 'liter(s)', createdAt: new Date(), updatedAt: new Date() },
{ measurementUnitName: 'milliliter(s)', createdAt: new Date(), updatedAt: new Date() },
{ measurementUnitName: 'ounce(s)', createdAt: new Date(), updatedAt: new Date() },
{ measurementUnitName: 'pinch(es)', createdAt: new Date(), updatedAt: new Date() },
{ measurementUnitName: 'pint(s)', createdAt: new Date(), updatedAt: new Date() },
{ measurementUnitName: 'pound(s)', createdAt: new Date(), updatedAt: new Date() },
{ measurementUnitName: 'quart(s)', createdAt: new Date(), updatedAt: new Date() },
{ measurementUnitName: 'tablespoon(s)', createdAt: new Date(), updatedAt: new Date() },
{ measurementUnitName: 'teaspoon(s)', createdAt: new Date(), updatedAt: new Date() },
{ measurementUnitName: 'can(s)', createdAt: new Date(), updatedAt: new Date() },
{ measurementUnitName: 'slice(s)', createdAt: new Date(), updatedAt: new Date() },
{ measurementUnitName: 'splash(es)', createdAt: new Date(), updatedAt: new Date() },], {});
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
    */
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('MeasurementUnits', null, {});
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
    */
  }
};
