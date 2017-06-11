'use strict';
module.exports = function(sequelize, DataTypes) {
  var Course = sequelize.define('Course', {
    title: DataTypes.STRING,
    url: DataTypes.STRING,
    downloaded: DataTypes.BOOLEAN,
    date_published: DataTypes.DATEONLY
  }, {
    underscored: true,
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Course;
};