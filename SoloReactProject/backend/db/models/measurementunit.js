'use strict';
module.exports = (sequelize, DataTypes) => {
  const MeasurementUnit = sequelize.define('MeasurementUnit', {
    measurementUnitName: DataTypes.STRING
  }, {});
  MeasurementUnit.associate = function(models) {
    // associations can be defined here
    MeasurementUnit.belongsTo(models.Supply, { foreignKey: 'measurementUnitId' });
  };
  return MeasurementUnit;
};
