'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('StepImages', [

{url: 'https://abproject1.s3-us-west-1.amazonaws.com/folderone/AppArt/Pizza.png', stepId: 1,  createdAt: new Date(), updatedAt: new Date()},
{url: 'https://abproject1.s3-us-west-1.amazonaws.com/folderone/AppArt/Pizza.png', stepId: 2,  createdAt: new Date(), updatedAt: new Date()},
{url: 'https://abproject1.s3-us-west-1.amazonaws.com/folderone/AppArt/Pizza.png', stepId: 3,  createdAt: new Date(), updatedAt: new Date()},
{url: 'https://abproject1.s3-us-west-1.amazonaws.com/folderone/AppArt/Gnocci.png', stepId: 1,  createdAt: new Date(), updatedAt: new Date()},
{url: 'https://abproject1.s3-us-west-1.amazonaws.com/folderone/AppArt/Gnocci.png', stepId: 2,  createdAt: new Date(), updatedAt: new Date()},
{url: 'https://abproject1.s3-us-west-1.amazonaws.com/folderone/AppArt/Gnocci.png', stepId: 3,  createdAt: new Date(), updatedAt: new Date()},
{url: 'https://abproject1.s3-us-west-1.amazonaws.com/folderone/AppArt/TomatoSauce.png', stepId: 1,  createdAt: new Date(), updatedAt: new Date()},
{url: 'https://abproject1.s3-us-west-1.amazonaws.com/folderone/AppArt/TomatoSauce.png', stepId: 2,  createdAt: new Date(), updatedAt: new Date()},
{url: 'https://abproject1.s3-us-west-1.amazonaws.com/folderone/AppArt/TomatoSauce.png', stepId: 3,  createdAt: new Date(), updatedAt: new Date()},
{url: 'https://abproject1.s3-us-west-1.amazonaws.com/folderone/AppArt/Ba%CC%81nhMi%CC%80.png', stepId: 1,  createdAt: new Date(), updatedAt: new Date()},
{url: 'https://abproject1.s3-us-west-1.amazonaws.com/folderone/AppArt/Ba%CC%81nhMi%CC%80.png', stepId: 2, createdAt: new Date(), updatedAt: new Date()},
{url: 'https://abproject1.s3-us-west-1.amazonaws.com/folderone/AppArt/Ba%CC%81nhMi%CC%80.png', stepId: 3,  createdAt: new Date(), updatedAt: new Date()},
{url: 'https://abproject1.s3-us-west-1.amazonaws.com/folderone/AppArt/Pho%CC%9B%CC%89.png', stepId: 1,  createdAt: new Date(), updatedAt: new Date()},
{url: 'https://abproject1.s3-us-west-1.amazonaws.com/folderone/AppArt/Pho%CC%9B%CC%89.png', stepId: 2,  createdAt: new Date(), updatedAt: new Date()},
{url: 'https://abproject1.s3-us-west-1.amazonaws.com/folderone/AppArt/Pho%CC%9B%CC%89.png', stepId: 3,  createdAt: new Date(), updatedAt: new Date()},
{url: 'https://abproject1.s3-us-west-1.amazonaws.com/folderone/AppArt/SpringRoll.png', stepId: 1,  createdAt: new Date(), updatedAt: new Date()},
{url: 'https://abproject1.s3-us-west-1.amazonaws.com/folderone/AppArt/SpringRoll.png', stepId: 2,  createdAt: new Date(), updatedAt: new Date()},
{url: 'https://abproject1.s3-us-west-1.amazonaws.com/folderone/AppArt/SpringRoll.png', stepId: 3,  createdAt: new Date(), updatedAt: new Date()},
{url: 'https://abproject1.s3-us-west-1.amazonaws.com/folderone/AppArt/Naan.png', stepId: 1,  createdAt: new Date(), updatedAt: new Date()},
{url: 'https://abproject1.s3-us-west-1.amazonaws.com/folderone/AppArt/Naan.png', stepId: 2,  createdAt: new Date(), updatedAt: new Date()},
{url: 'https://abproject1.s3-us-west-1.amazonaws.com/folderone/AppArt/Naan.png', stepId: 3,  createdAt: new Date(), updatedAt: new Date()},
{url: 'https://abproject1.s3-us-west-1.amazonaws.com/folderone/AppArt/SaagPaneer.png', stepId: 1,  createdAt: new Date(), updatedAt: new Date()},
{url: 'https://abproject1.s3-us-west-1.amazonaws.com/folderone/AppArt/SaagPaneer.png', stepId: 2,  createdAt: new Date(), updatedAt: new Date()},
{url: 'https://abproject1.s3-us-west-1.amazonaws.com/folderone/AppArt/SaagPaneer.png', stepId: 3,  createdAt: new Date(), updatedAt: new Date()},
{url: 'https://abproject1.s3-us-west-1.amazonaws.com/folderone/AppArt/AlooGobi.png', stepId: 1,  createdAt: new Date(), updatedAt: new Date()},
{url: 'https://abproject1.s3-us-west-1.amazonaws.com/folderone/AppArt/AlooGobi.png', stepId: 2,  createdAt: new Date(), updatedAt: new Date()},
{url: 'https://abproject1.s3-us-west-1.amazonaws.com/folderone/AppArt/AlooGobi.png', stepId: 3,  createdAt: new Date(), updatedAt: new Date()},
  ], {});
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
    */
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('StepImages', null, {});
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
    */
  }
};
