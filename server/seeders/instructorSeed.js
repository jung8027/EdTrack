const Sequelize = require("sequelize");
const models = require("../models");

const instructorSeedFunc = () => {
	models.Instructor.sync({ force:true })
		.then( () => {
			models.Instructor.bulkCreate([
				{ name: "Chuck", email: "chuck@c4q.nyc" },
				{ name: "Frizzle", email: "frizzle@c4q.nyc" },
				{ name: "Abass", email: "abass@c4q.nyc" },
				{ name: "Jason", email: "jason@c4q.nyc" },
				{ name: "Ben", email: "ben@c4q.nyc" },
			]);
		});
};

instructorSeedFunc();
module.exports = instructorSeedFunc;
