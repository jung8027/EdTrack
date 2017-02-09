"use strict";

module.exports = (sequelize, DataTypes) => {
	const Class = sequelize.define("Class", {
			name: {
				type: DataTypes.STRING,
				validate: {notEmpty: true}
			},
			startDate: {
				type: DataTypes.DATEONLY,
				validate: {notEmpty: true}
			},
			endDate: {
				type: DataTypes.DATEONLY,
				validate: {notEmpty: true}
			},
		}
	);
	return Class;
};
