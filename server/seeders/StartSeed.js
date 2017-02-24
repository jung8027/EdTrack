const models = require('../models');

const ClassSeedFunc = require('./ClassSeed.js');
const instructorSeedFunc = require('./instructorSeed.js');
const TopicSeedFunc = require('./TopicSeed.js');
const MentorSeedFunc = require('./MentorSeed.js');
const StudentSeedFunc = require('./studentSeed.js');
const gradeSeedFunc = require('./gradeSeed.js');

const StartSeedFunc = () => {
	models.Instructor.sync({force: true})
		.then(setTimeout(() => instructorSeedFunc(),2000));

	models.Topic.sync({force: true})
		.then(setTimeout(() => TopicSeedFunc(),2000));

	models.Mentor.sync({force: true})
		.then(setTimeout(() => MentorSeedFunc(),2000));

	models.Student.sync({force: true})
		.then(setTimeout(() => StudentSeedFunc(),3000));

	models.Grade.sync({force: true})
		.then(setTimeout(() => gradeSeedFunc(),3000));

	models.Class.sync({force: true})
		.then(setTimeout(() => ClassSeedFunc(),2000));
};

StartSeedFunc();

module.exports = StartSeedFunc;



