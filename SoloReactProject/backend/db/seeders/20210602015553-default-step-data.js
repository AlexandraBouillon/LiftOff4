'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Steps', [
{stepContent: 'Proof the Dough',projectId: 1 ,stepNumber:1 , createdAt: new Date(), updatedAt: new Date()},
{stepContent: 'Roll out dough and add toppings',projectId: 1 ,stepNumber: 2, createdAt: new Date(), updatedAt: new Date()},
{stepContent: 'Bake until crust is puffed and toasted',projectId: 1 ,stepNumber: 3, createdAt: new Date(), updatedAt: new Date()},
{stepContent: 'Mix flour, salt, and water.  ',projectId: 2 ,stepNumber: 1, createdAt: new Date(), updatedAt: new Date()},
{stepContent: 'Roll into long log and pinch off and thumb size.',projectId: 2 ,stepNumber: 2, createdAt: new Date(), updatedAt: new Date()},
{stepContent: 'Dust with semolina flour and boil for 1-2 minutes. ',projectId: 2 ,stepNumber: 3, createdAt: new Date(), updatedAt: new Date()},
{stepContent: 'Wash an peel tomatoes',projectId: 3 ,stepNumber: 1, createdAt: new Date(), updatedAt: new Date()},
{stepContent: 'Add garlic and salt',projectId: 3 ,stepNumber: 2, createdAt: new Date(), updatedAt: new Date()},
{stepContent: 'Simmer tomatoes on heat for 2 hours ',projectId: 3 ,stepNumber: 3, createdAt: new Date(), updatedAt: new Date()},
{stepContent: 'Slice baguette',projectId: 4 ,stepNumber: 1, createdAt: new Date(), updatedAt: new Date()},
{stepContent: 'Add pork pate, jalapeno, carrot, and cilatro',projectId: 4 ,stepNumber: 2, createdAt: new Date(), updatedAt: new Date()},
{stepContent: 'Toast, slice, slice and serve',projectId: 4 ,stepNumber: 3, createdAt: new Date(), updatedAt: new Date()},
{stepContent: 'Simmer Beef stock',projectId: 5 ,stepNumber: 1, createdAt: new Date(), updatedAt: new Date()},
{stepContent: 'Add celery, bok choy and garlic',projectId: 5 ,stepNumber: 2, createdAt: new Date(), updatedAt: new Date()},
{stepContent: 'Add in Tripe, and beef flank and serve',projectId: 5 ,stepNumber: 3, createdAt: new Date(), updatedAt: new Date()},
{stepContent: 'Steam rice paper',projectId: 6 ,stepNumber: 1, createdAt: new Date(), updatedAt: new Date()},
{stepContent: 'Julliene Carrot, basil,cucumber, and shrimp ',projectId: 6 ,stepNumber: 2, createdAt: new Date(), updatedAt: new Date()},
{stepContent: 'Tuck ingredients and roll rice paper',projectId: 6 ,stepNumber: 3, createdAt: new Date(), updatedAt: new Date()},
{stepContent: 'Mix flour, water, and yeast',projectId: 7 ,stepNumber: 1, createdAt: new Date(), updatedAt: new Date()},
{stepContent: 'Let proof',projectId: 7 ,stepNumber: 2, createdAt: new Date(), updatedAt: new Date()},
{stepContent: 'Place in tandoori and hook out once toasted. ',projectId: 7 ,stepNumber: 3, createdAt: new Date(), updatedAt: new Date()},
{stepContent: 'In a large bowl, whisk together the turmeric, cayenne, 1 teaspoon salt and 3 tablespoons oil. Gently, drop in the cubes of paneer and gently toss, taking care not to break the cubes of cheese.',projectId: 8 ,stepNumber: 1, createdAt: new Date(), updatedAt: new Date()},
{stepContent: 'Add the spinach, garam masala, coriander, cumin. and stir well, incorporating the spiced onion mixture',projectId: 8 ,stepNumber: 2, createdAt: new Date(), updatedAt: new Date()},
{stepContent: 'Turn the heat off. Add the yogurt, a little at a time to keep it from curdling. Once the yogurt is well mixed into the spinach, add the paneer. ',projectId: 8 ,stepNumber: 3, createdAt: new Date(), updatedAt: new Date()},
{stepContent: 'Saute ginger, galir, cumin seeds, onion and green chili',projectId: 9 ,stepNumber: 1, createdAt: new Date(), updatedAt: new Date()},
{stepContent: 'Add cooked potatoes and caluflower, chili powder garam masala, coriander and tumeric.',projectId: 9 ,stepNumber: 2, createdAt: new Date(), updatedAt: new Date()},
{stepContent: 'Mix well and cook until tender',projectId: 9 ,stepNumber: 3, createdAt: new Date(), updatedAt: new Date()},
  ], {});
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
    */
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Steps', null, {});
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
    */
  }
};
