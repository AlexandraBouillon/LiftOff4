'use strict';
module.exports = (sequelize, DataTypes) => {
  const Project = sequelize.define('Project', {
    projectName: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    url: DataTypes.STRING
  }, {});
  Project.associate = function(models) {
    // associations can be defined here
    Project.hasMany(models.Step, { foreignKey: 'projectId' });
    Project.hasMany(models.Comment, { foreignKey: 'projectId' });
    Project.hasMany(models.Supply, { foreignKey: 'projectId' });
    Project.belongsTo(models.User, { foreignKey: 'userId' });
  };
  return Project;
};
