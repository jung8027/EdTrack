const models = require('../models');

const StudentSeedFunc = () => {
	//add the following students to the database:
	models.Student.sync({force: true})
		.then((data) =>
			models.Student.create({
				name: 'Iliass', email: 'Iliass@email.com', address: '11 main st'
			}))
		.then((student) =>
			student.addTopics([8,9,10]))

		.then((data) =>
			models.Student.create({
				name: 'Quan', email: 'Quan@email.com', address: '33 main st'
			}))
		.then((student) =>
			student.addTopics([2,4,10]))

		.then((data) =>
			models.Student.create({
				name: 'Jung', email: 'Jung@email.com', address: '44 main st'
			}))
		.then((student) =>
			student.addTopics([2,3,4]))

		.then((data) =>
			models.Student.create({
				name: 'Luis', email: 'Luis@email.com', address: '12 main st'
			}))

		.then((data) =>
			models.Student.create({
				name: 'John', email: 'John@email.com', address: '13 main st'
			}))

		.then((data) =>
			models.Student.create({
				name: 'Joe', email: 'Joe@email.com', address: '14 main st'
			}))

		.then((data) =>
			models.Student.create({
				name: 'Jack', email: 'Jack@email.com', address: '15 main st'
			}))
		.then((student) =>
			student.addTopics([2,6,9]))

		.then((data) =>
			models.Student.create({
				name: 'Kelly', email: 'Kelly@email.com', address: '16 main st'
			}))

		.then((data) =>
			models.Student.create({
				name: 'Tracy', email: 'Tracy@email.com', address: '17 main st'
			}))

		.then((data) =>
			models.Student.create({
				name: 'Jill', email: 'Jill@email.com', address: '18 main st'
			}));
};
StudentSeedFunc();
module.exports = StudentSeedFunc;
