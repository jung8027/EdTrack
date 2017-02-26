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
				{name: 'Algorithms'},
				{name: 'Git'}
		]);
	});
};
TopicSeedFunc();
module.exports = TopicSeedFunc;
