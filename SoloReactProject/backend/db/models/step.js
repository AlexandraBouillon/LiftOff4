'use strict';
module.exports = (sequelize, DataTypes) => {
  const Step = sequelize.define('Step', {
    stepContent: DataTypes.TEXT,
    projectId: DataTypes.INTEGER,
    stepNumber: DataTypes.INTEGER
  }, {});
  Step.associate = function(models) {
    // associations can be defined here
    Step.belongsTo(models.Project, { foreignKey: 'projectId' });
  };
  return Step;
};
