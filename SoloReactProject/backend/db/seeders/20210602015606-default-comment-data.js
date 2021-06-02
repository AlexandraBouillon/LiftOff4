'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Comments', [
      {content: 'Looks Great', projectId: 1, userId: 1 , createdAt: new Date(), updatedAt: new Date()},
{content: 'Did this take long?', projectId: 2, userId: 1 , createdAt: new Date(), updatedAt: new Date()},
{content: 'Nice Steps!', projectId: 3, userId: 1 , createdAt: new Date(), updatedAt: new Date()},
{content: 'Smells Delicious', projectId: 1, userId: 2 , createdAt: new Date(), updatedAt: new Date()},
{content: 'Fantastic photo', projectId: 2, userId: 2 , createdAt: new Date(), updatedAt: new Date()},
{content: 'Family loved it!', projectId: 3, userId: 2 , createdAt: new Date(), updatedAt: new Date()},
{content: 'Can not wait to try!', projectId: 1, userId: 3 , createdAt: new Date(), updatedAt: new Date()},
{content: 'Incredible!', projectId: 2, userId: 3 , createdAt: new Date(), updatedAt: new Date()},
{content: 'Wow', projectId: 3, userId: 3 , createdAt: new Date(), updatedAt: new Date()},
    ], {});
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
    */
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Comments', null, {});
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
    */
  }
};
