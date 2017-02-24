const models = require('../models');

const MentorSeedFunc = () => {
	models.Mentor.sync({force: true})
		.then((data) => models.Mentor.create({
			name: 'Justin Greet',
			email: 'justin.greet@email.com',
			img_path: "/a4660052d5b6fee6192db0b5aeede812.png"
		}))
		.then((mentor) =>
			mentor.addTopics([5,6,7,8,9,10]))

		.then((data) => models.Mentor.create({
			name: 'Josh Cohen',
			email: 'josh.cohen@email.com',
			img_path: "/a4660052d5b6fee6192db0b5aeede812.png"
		}))
		.then((mentor) =>
			mentor.addTopics([5,6,7]))

		.then((data) => models.Mentor.create({
			name: 'Kenny Durkin',
			email: 'kenny.durkin@email.com',
			img_path: "/a4660052d5b6fee6192db0b5aeede812.png"
		}))
		.then((mentor) =>
			mentor.addTopics([1,5,6,7,8,9,10]))

		.then((data) => models.Mentor.create({
			name: 'Nathan Brown',
			email: 'nathan.brown@email.com',
			img_path: "/a4660052d5b6fee6192db0b5aeede812.png"
		}))
		.then((mentor) =>
			mentor.addTopics([1,2,5,6,7,8,9,10]))

		.then((data) => models.Mentor.create({
			name: 'Cassie Moi',
			email: 'cassie.moi@email.com',
			img_path: "/a4660052d5b6fee6192db0b5aeede812.png"
		}))
		.then((mentor) =>
			mentor.addTopics([5,6,7,8,9,10]))

		.then((data) => models.Mentor.create({
			name: 'Paul Hine',
			email: 'paul.hine@email.com',
			img_path: "/a4660052d5b6fee6192db0b5aeede812.png"
		}))
		.then((mentor) =>
			mentor.addTopics([1,2,3,4,5,6,7,8,9,10]))

		.then((data) => models.Mentor.create({
			name: 'Paul Schreiber',
			email: 'paul.schreiber@email.com',
			img_path: "/a4660052d5b6fee6192db0b5aeede812.png"
		}))
		.then((mentor) =>
			mentor.addTopics([5,6,7,8,9,10]))

		.then((data) => models.Mentor.create({
			name: 'Lev Izraelit',
			email: 'lev.izraelit@email.com',
			img_path: "/a4660052d5b6fee6192db0b5aeede812.png"
		}))
		.then((mentor)=>
			mentor.addTopics([1,2,3,4,5,6,7,8,9,10]));
};

MentorSeedFunc();

module.exports = MentorSeedFunc;
