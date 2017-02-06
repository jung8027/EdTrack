const Sequelize = require('sequelize');
const models = require('../models');

//Student.sync will create the students table
models.Grade.sync({force: true})
//add the following Grades to the database:
	.then(() => models.Grade.bulkCreate([
		{grade: 70, type: 'quiz', 			StudentId: 1},
		{grade: 97, type: 'assignment', StudentId: 1},
		{grade: 80, type: 'midterm', 		StudentId: 1},
		{grade: 50, type: 'final', 			StudentId: 1},
		{grade: 100, type: 'quiz', 			StudentId: 1},
		{grade: 90, type: 'quiz', 			StudentId: 2},
		{grade: 40, type: 'assignment', StudentId: 2},
		{grade: 90, type: 'midterm', 		StudentId: 2},
		{grade: 86, type: 'final', 			StudentId: 2},
		{grade: 75, type: 'quiz', 			StudentId: 2},
		{grade: 100, type: 'quiz', 			StudentId: 3},
		{grade: 90, type: 'assignment', StudentId: 3},
		{grade: 95, type: 'midterm', 		StudentId: 3},
		{grade: 90, type: 'final', 			StudentId: 3},
		{grade: 100, type: 'quiz', 			StudentId: 3},
		{grade: 100, type: 'quiz', 			StudentId: 4},
		{grade: 60, type: 'assignment', StudentId: 4},
		{grade: 86, type: 'midterm', 		StudentId: 4},
		{grade: 67, type: 'final', 			StudentId: 4},
		{grade: 90, type: 'quiz', 			StudentId: 4},

	]))
	//the following students should NOT be added to your database:
	//(if your validations are setup correctly)
	.then(() => models.Grade.bulkCreate([
		{grade: '80', type: 1},
		{grade: [80, 90],type: ""},
	], {validate: true}))

	// if everything is correct, you should only have THREE students in your database
	.catch((err) => console.log(err));
