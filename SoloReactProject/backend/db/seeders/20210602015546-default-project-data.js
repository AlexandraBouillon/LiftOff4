'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Projects', [
      {projectName: 'Making Pizza',userId: 1 ,createdAt: new Date(), updatedAt: new Date()},
      {projectName: 'Making Gnocci',userId: 1 ,createdAt: new Date(), updatedAt: new Date()},
      {projectName: 'Making Tomato Sauce',userId: 1,createdAt: new Date(), updatedAt: new Date() },
      {projectName: 'Making Bánh Mì',userId: 2 ,createdAt: new Date(), updatedAt: new Date()},
      {projectName: 'Making Phó',userId: 2 ,createdAt: new Date(), updatedAt: new Date()},
      {projectName: 'Making Spring Roll',userId: 2 ,createdAt: new Date(), updatedAt: new Date()},
      {projectName: 'Making Naan',userId: 3 ,createdAt: new Date(), updatedAt: new Date()},
      {projectName: 'Making Saag Paneer',userId: 3 ,createdAt: new Date(), updatedAt: new Date()},
      {projectName: 'Making Aloo Gobi',userId: 3 ,createdAt: new Date(), updatedAt: new Date()},
  ], {});
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
    */
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Projects', null, {});
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
    */
  }
};
