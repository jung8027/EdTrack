const models = require('../models');

const StudentSeedFunc = () => {
	//add the following students to the database:
	models.Student.sync({force: true})
		.then(() => {
			models.Student.bulkCreate([
				{name: 'Iliass', email: 'Iliass@email.com', address: '11 main st'},
				{name: 'Quan', email: 'Quan@email.com', address: '33 main st'},
				{name: 'Jung', email: 'Jung@email.com', address: '44 main st'},
				{name: 'Luis', email: 'Luis@email.com', address: '12 main st'},
				{name: 'John', email: 'John@email.com', address: '13 main st'},
				{name: 'Joe', email: 'Joe@email.com', address: '14 main st'},
				{name: 'Jack', email: 'Jack@email.com', address: '15 main st'},
				{name: 'Kelly', email: 'Kelly@email.com', address: '16 main st'},
				{name: 'Tracy', email: 'Tracy@email.com', address: '17 main st'},
				{name: 'Jill', email: 'Jill@email.com', address: '18 main st'}
			]);
		});
};
StudentSeedFunc();
module.exports = StudentSeedFunc;
