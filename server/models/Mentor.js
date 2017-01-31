"use strict";

module.exports = function(sequelize, DataTypes) {
  var Mentor = sequelize.define('Mentor', {
    name: {
      type: DataTypes.STRING
    },
    email: {
      type: DataTypes.STRING,
      validate: {isEmail: true}
    }
  }, {
    classMethods: {
      associate: function(models) {
        Mentor.hasMany(models.Topic)
        Mentor.belongsToMany(models.Topic, {through: 'Mentor_Topic'})
      }
    }
  });
  return Mentor;
};