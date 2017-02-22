const models = require('../models');

const MentorSeedFunc = () => {
	models.Mentor.sync({force: true})
		.then(() => {
			models.Mentor.bulkCreate([
				{name: 'test1', email: 'test1@gmail.com', img_path: "/a4660052d5b6fee6192db0b5aeede812.png"},
				{name: 'test2', email: 'test2@gmail.com', img_path: "/a4660052d5b6fee6192db0b5aeede812.png"},
				{name: 'test3', email: 'test3@gmail.com', img_path: "/a4660052d5b6fee6192db0b5aeede812.png"},
				{
					name: 'Justin Greet',
					email: 'justin.greet@gmail.com',
					img_path: "/a4660052d5b6fee6192db0b5aeede812.png"
				},
				{name: 'Josh Cohen', email: 'josh.cohen@gmail.com', img_path: "/a4660052d5b6fee6192db0b5aeede812.png"},
				{
					name: 'Kenny Durkin',
					email: 'kenny.durkin@gmail.com',
					img_path: "/a4660052d5b6fee6192db0b5aeede812.png"
				},
				{
					name: 'Nathan Brown',
					email: 'nathan.brown@gmail.com',
					img_path: "/a4660052d5b6fee6192db0b5aeede812.png"
				},
				{name: 'Cassie Moi', email: 'cassie.moi@gmail.com', img_path: "/a4660052d5b6fee6192db0b5aeede812.png"},
				{name: 'Paul Hine', email: 'paul.hine@gmail.com', img_path: "/a4660052d5b6fee6192db0b5aeede812.png"},
				{
					name: 'Paul Schreiber',
					email: 'paul.schreiber@gmail.com',
					img_path: "/a4660052d5b6fee6192db0b5aeede812.png"
				},
				{
					name: 'Lev Izraelit',
					email: 'lev.izraelit@gmail.com',
					img_path: "/a4660052d5b6fee6192db0b5aeede812.png"
				}
			]);
		})
};

MentorSeedFunc();

module.exports = MentorSeedFunc;
