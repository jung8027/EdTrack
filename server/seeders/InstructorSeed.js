const Sequelize = require("sequelize");
const models = require("../models");

const InstructorSeedFunc = () => {
	models.Student.sync({ force:true })
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

InstructorSeedFunc();
module.exports = InstructorSeedFunc;
