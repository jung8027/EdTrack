const models = require('../models');

const TopicSeedFunc = () => {
	models.Topic.sync({force: true})
		.then(() => {
			models.Topic.bulkCreate([
				{name: 'React'},
				{name: 'Redux'},
				{name: 'Express'},
				{name: 'Sequelize'},
				{name: 'Functions'},
				{name: 'Recursion'},
				{name: 'Variables'},
				{name: 'Linked lists'},
				{name: 'JavaScript Fundamentals'},
				{name: 'Data Structures'}
		]);
	});
};
TopicSeedFunc();
module.exports = TopicSeedFunc;
