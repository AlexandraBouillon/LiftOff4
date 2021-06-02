'use strict';
module.exports = (sequelize, DataTypes) => {
  const StepImage = sequelize.define('StepImage', {
    url: DataTypes.STRING,
    stepId: DataTypes.INTEGER
  }, {});
  StepImage.associate = function(models) {
    // associations can be defined here
    StepImage.belongsTo(models.Step,{foreignKey:"stepId"});
  };
  return StepImage;
};
