const router = require("express").Router();
const Mentor = require('../models').Mentor;
const Topic = require('../models').Topic;

//FUNCTIONS//
const getAllMentors = (req, res) => {
	Mentor.findAll({
		include: [{model: Topic}]
	})
		.then((MentorInfo) => res.send(MentorInfo));
};

const postNewMentor = (req, res) => {
	Mentor.create({
		name: req.body.name,
		img_path: req.body.img_path,
		email: req.body.email
	})
		.then((MentorInfo) => {
			MentorInfo.dataValues.message = 'Mentor successfully added!';
			res.send(MentorInfo);
		});
};

const getSingleMentor = (req, res) => {
	Mentor.findOne({
		where: {id: req.params.id},
		include: [{model: Topic}]
	})
		.then((MentorInfo) => res.send(MentorInfo));
};

const updateSingleMentor = (req, res) => {
	Mentor.findOne({
		where: {id: req.params.id}
	})
		.then((MentorInfo) => {
			MentorInfo.update({
				name: req.body.name,
				email: req.body.email
			})
				.then((NewMentorInfo) => res.send(NewMentorInfo));
		});
};

const deleteSingleMentor = (req, res) => {
	Mentor.destroy({
		where: {id: req.params.id}
	})
		.then(() => res.send('Mentor removed'));
};

const attachTopicsToMentor = (req,res) => {
	let selectedTopics = JSON.parse(req.body.selectedTopics);
	Mentor.findOne({
		where: {id: req.params.id}
	})
		.then((MentorInfo) => {
			MentorInfo.setTopics(selectedTopics);
		})
			.then((JoinsInfo) => {
				res.send(JoinsInfo);
			});
};


//ROUTES//
router.route('/')
	.get(getAllMentors)
	.post(postNewMentor);

router.route('/:id')
	.get(getSingleMentor)
	.put(updateSingleMentor)
	.delete(deleteSingleMentor);

router.route('/:id/topic')
	.post(attachTopicsToMentor);

module.exports = router;
