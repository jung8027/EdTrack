const router = require('express').Router();
const models = require('../models');

const createTopic = (req, res) => {
	models.Topic.create({
		name: req.body.name
	})
		.then((data) => {
			res.send(data);
		});
};


const getTopics = (req, res) => {
	models.Topic.findAll()
		.then((topics) => {
			res.send(topics);
		});
};


const getOneTopic = (req, res) => {
	models.Topic.findById(req.params.id)
		.then((data) => {
			res.send(data);
		});
};


const deleteTopic = (req, res) => {
	models.Topic.destroy({where: {id: req.params.id}})
		.then(() => res.send('has been deleted'));
};


const updateTopic = (req, res) => {
	let body = req.body;
	models.Topic.findOne({where: {id: req.params.id}})
		.then((topicInfo) => topicInfo.update({name: req.body.name})
		)
		.then((data) => res.send(data));
};

const getTopicStudent = (req, res) => {
	// req.topics = [2,3,4]
	models.Topic.findAll({
		include: [{model: models.Student}]
	})
		.then((topics) => {
			res.send(topics);
		});
};

const getTopicMentor = (req, res) => {
	models.Topic.findAll({
		include: [{model: models.Mentor}]
	})
		.then((topics) => {
			res.send(topics);
		});
};

//ROUTES
router.route('/')
	.post(createTopic)
	.get(getTopics);

router.route('/student')
	.get(getTopicStudent);

router.route('/mentor')
	.get(getTopicMentor);

router.route('/:id')
	.get(getOneTopic)
	.delete(deleteTopic)
	.put(updateTopic);


module.exports = router;
