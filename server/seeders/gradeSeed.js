const Sequelize = require('sequelize');
const models = require('../models');

const gradeSeedFunc = () => {
	//Grade.sync will create the grades table
	models.Grade.sync({force: true})
	//add the following Grades to the database:
		.then(() => models.Grade.bulkCreate([
			{grade: 70, type: 'quiz', 			StudentId: 1},
			{grade: 97, type: 'assignment', StudentId: 1},
			{grade: 80, type: 'midterm', 		StudentId: 1},
			{grade: 50, type: 'final', 			StudentId: 1},
			{grade: 90, type: 'quiz', 			StudentId: 2},
			{grade: 40, type: 'assignment', StudentId: 2},
			{grade: 90, type: 'midterm', 		StudentId: 2},
			{grade: 86, type: 'final', 			StudentId: 2},
			{grade: 50, type: 'quiz', 			StudentId: 3},
			{grade: 90, type: 'assignment', StudentId: 3},
			{grade: 95, type: 'midterm', 		StudentId: 3},
			{grade: 90, type: 'final', 			StudentId: 3},
			{grade: 100, type: 'quiz', 			StudentId: 4},
			{grade: 70, type: 'assignment', StudentId: 4},
			{grade: 86, type: 'midterm', 		StudentId: 4},
			{grade: 65, type: 'final', 			StudentId: 4},
			{grade: 70, type: 'quiz', 			StudentId: 5},
			{grade: 70, type: 'assignment', StudentId: 5},
			{grade: 80, type: 'midterm', 		StudentId: 5},
			{grade: 80, type: 'final', 			StudentId: 5},
			{grade: 70, type: 'quiz', 			StudentId: 6},
			{grade: 97, type: 'assignment', StudentId: 6},
			{grade: 80, type: 'midterm', 		StudentId: 6},
			{grade: 70, type: 'final', 			StudentId: 6},
			{grade: 70, type: 'quiz', 			StudentId: 7},
			{grade: 40, type: 'assignment', StudentId: 7},
			{grade: 50, type: 'midterm', 		StudentId: 7},
			{grade: 50, type: 'final', 			StudentId: 7},
			{grade: 80, type: 'quiz', 			StudentId: 8},
			{grade: 80, type: 'assignment', StudentId: 8},
			{grade: 80, type: 'midterm', 		StudentId: 8},
			{grade: 80, type: 'final', 			StudentId: 8},
			{grade: 70, type: 'quiz', 			StudentId: 9},
			{grade: 97, type: 'assignment', StudentId: 9},
			{grade: 80, type: 'midterm', 		StudentId: 9},
			{grade: 80, type: 'final', 			StudentId: 9},
			{grade: 70, type: 'quiz', 			StudentId: 10},
			{grade: 65, type: 'assignment', StudentId: 10},
			{grade: 80, type: 'midterm', 		StudentId: 10},
			{grade: 80, type: 'final', 			StudentId: 10}
		]))
		//(if your validations are setup correctly)
		.then(() => models.Grade.bulkCreate([
			{grade: '80', type: 1},
			{grade: [80, 90],type: ""},
		], {validate: true}))
		.catch((err) => console.log(err));

};

gradeSeedFunc();

module.exports = gradeSeedFunc;
