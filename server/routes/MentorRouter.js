const router = require("express").Router();
const Mentor = require('../models').Mentor;

//FUNCTIONS//
const getAllMentors = (req, res) => {
	Mentor.findAll()
		.then((MentorsInfo) => res.send(MentorsInfo));
};

const postNewMentor = (req, res) => {
	Mentor.create({
		name: req.body.name,
		email: req.body.email
	})
		.then((MentorInfo) => res.send(MentorInfo));
};

const getSingleMentor = (req, res) => {
	Mentor.findOne({
		where: {id: req.params.id}
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


//ROUTES//
router.route('/')
	.get(getAllMentors)
	.post(postNewMentor);

router.route('/:id')
	.get(getSingleMentor)
	.put(updateSingleMentor)
	.delete(deleteSingleMentor);

module.exports = router;
