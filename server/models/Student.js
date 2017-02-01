"use strict";

module.exports = (sequelize, DataTypes)=> {
	const Student = sequelize.define("Student", {
			name: {
				type: DataTypes.STRING,
        validate: {notEmpty: true}
			},
			email:{
				type: DataTypes.STRING,
				validate: {isEmail: true}
			},
			address:{
				type: DataTypes.STRING
			}
		}, {
			classMethods: {
				associate: (models)=> {
					Student.hasMany(models.Grade);
					Student.hasMany(models.Topic);
					Student.belongsToMany(models.Topic, {through: 'Student_Topic'});
				}
			}
		}
	);
	return Student;
};

