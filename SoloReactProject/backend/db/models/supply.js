'use strict';
module.exports = (sequelize, DataTypes) => {
  const Supply = sequelize.define('Supply', {
    supplyName: DataTypes.STRING,
    quantity: DataTypes.DECIMAL,
    measurementUnitId: DataTypes.INTEGER,
    projectId: DataTypes.INTEGER
  }, {});
  Supply.associate = function(models) {
    // associations can be defined here
    Supply.belongsTo(models.Project, { foreignKey: 'projectId' });
    Supply.hasMany(models.MeasurementUnit, { foreignKey: 'measurementUnitId' });
  };
  return Supply;
};
