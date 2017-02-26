"use strict";

module.exports = (sequelize, DataTypes) => {
	const Grade = sequelize.define("Grade", {
		grade: {
			type: DataTypes.FLOAT,
			validate: {notEmpty: true}
		},
		type: {
			type: DataTypes.STRING,
			validate: {notEmpty: true}
		},
	}, {
		classMethods: {
			associate: (models) => {
				Grade.belongsTo(models.Student);
			}
		}
	});
	return Grade;
};
