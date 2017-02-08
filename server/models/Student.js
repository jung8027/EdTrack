"use strict";

module.exports = (sequelize, DataTypes) => {
	const Student = sequelize.define("Student", {
			name: {
				type: DataTypes.STRING,
				validate: {notEmpty: true}
			},
			email: {
				type: DataTypes.STRING,
				validate: {isEmail: true, notEmpty:true}
			},
			address: {
				type: DataTypes.STRING
			}
		}, {
			classMethods: {
				associate: (models) => {
					Student.hasMany(models.Grade);
					Student.belongsToMany(models.Topic, {through: 'Student_Topic'});
				}
			}
		}
	);
	return Student;
};

