"use strict";

module.exports = function(sequelize, DataTypes) {
  const Mentor = sequelize.define('Mentor', {
    name: {
      type: DataTypes.STRING,
      validate: {notEmpty: true}
    },
    email: {
      type: DataTypes.STRING,
      validate: {isEmail: true}
    }
  }, {
    classMethods: {
      associate: function(models) {
        Mentor.hasMany(models.Topic);
        Mentor.belongsToMany(models.Topic, {through: 'Mentor_Topic'});
      }
    }
  });
  return Mentor;
};