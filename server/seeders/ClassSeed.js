const models = require('../models');

const ClassSeedFunc = () =>{
	models.Class.sync({force: true})
		.then(() => {
			models.Class.bulkCreate([
				{name: 'Full Stack', startDate: '01-01-2017', endDate:'11-01-2017'},
				{name: 'Android',    startDate: '01-01-2017', endDate:'11-01-2017'},
				{name: 'iOS',        startDate: '01-01-2017', endDate:'11-01-2017'}
		]);
	})
	// if everything is correct, you should only have three classes in your database
	.catch((err) => console.log(err));
};

ClassSeedFunc();

module.exports = ClassSeedFunc;
