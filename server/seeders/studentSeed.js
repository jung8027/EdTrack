const Sequelize = require('sequelize');
const models = require('../models');

//Student.sync will create the students table
models.Student.sync({force: true})
//add the following students to the database:
	.then(() => models.Student.bulkCreate([
		{name: 'ILIASS 1',email: 'iliass1@gmail.com',address:'1 main st'},
		{name: 'ILIASS 2',email: 'iliass2@gmail.com',address:'2 main st'},
		{name: 'ILIASS 3',email: 'iliass3@gmail.com',address:'3 main st'}

	]))
	//the following students should NOT be added to your database:
	//(if your validations are setup correctly)
	.then(() => models.Student.bulkCreate([
		{name: '',email: 'email.com'},
		{name: ['student1', 'student2'],email:''},
	], {validate: true}))

	// if everything is correct, you should only have THREE students in your database
	.catch((err) => console.log(err));
