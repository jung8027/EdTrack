"use strict";
module.exports = (sequelize, DataTypes)=> {
	const Topic = sequelize.define("Topic", {
		name: DataTypes.STRING
	}, {
		classMethods: {
	      associate: function(models) {
	        Topic.hasMany(models.Student);
	        Topic.hasMany(models.Mentor);
	      }
	    }
	}
	);
	return Topic;
};

