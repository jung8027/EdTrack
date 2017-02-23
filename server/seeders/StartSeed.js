const models = require('../models');

const ClassSeedFunc = require('./ClassSeed.js');
const instructorSeedFunc = require('./instructorSeed.js');
const TopicSeedFunc = require('./TopicSeed.js');
const MentorSeedFunc = require('./MentorSeed.js');
const StudentSeedFunc = require('./studentSeed.js');
const gradeSeedFunc = require('./gradeSeed.js');

const StartSeedFunc = () => {
	models.Instructor.sync({force: true})
		.then(() => instructorSeedFunc());

	models.Topic.sync({force: true})
		.then(() => TopicSeedFunc());

	models.Mentor.sync({force: true})
		.then(() => MentorSeedFunc());

	models.Student.sync({force: true})
		.then(() => StudentSeedFunc());

	models.Grade.sync({force: true})
		.then(() => gradeSeedFunc());

	models.Class.sync({force: true})
		.then(() => ClassSeedFunc());
};

StartSeedFunc();

module.exports = StartSeedFunc;



