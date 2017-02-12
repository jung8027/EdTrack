const Sequelize = require('sequelize');
const models = require('../models');


const StudentSeedFunc = () => {

	//add the following students to the database:
	models.Student.sync({force: true})
		.then(() => {
			models.Student.bulkCreate([
				{name: 'Iliass', email: 'iliass@gmail.com', address: '11 main st'},
				{name: 'Quan', email: 'quan@gmail.com', address: '33 main st'},
				{name: 'Jung', email: 'Jung@gmail.com', address: '44 main st'},
				{name: 'Luis', email: 'Luis@gmail.com', address: '12 main st'}

			])
		})
};
StudentSeedFunc();
module.exports = StudentSeedFunc;
