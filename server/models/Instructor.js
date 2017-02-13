"use strict";

module.exports = ( sequelize, DataTypes ) => {
	const Instructor = sequelize.define("Instructor", {
		name: {
			type: DataTypes.STRING,
			validate: { notEmpty: true }
		},
		email: {
			type: DataTypes.STRING,
			validate: { isEmail: true, notEmpty: true }
		},
	}, {
		classMethods: {
			associate: models => {
				Instructor.hasMany(models.Class);
			}
		}
	});
	return Instructor;
};
