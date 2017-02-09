const router = require('express').Router();
const models = require('../models');

const getClasses = (req, res) => {
	models.Class.findAll({})
		.then((classes) => {
			res.send(classes);
		})
}

const createClass = (req,res) => {
	models.Class.create({
		name: req.body.name,
		startDate: req.body.startDate,
		endDate: req.body.endDate
	})
		.then((newClass) => {
			res.send(newClass);
		})
};

const deleteClass = (req, res) => {
	models.Class.destroy({
		where: {id:req.params.id}
	})
		.then(() => {
			res.send('Class has been Deleted!')
		})
}

router.route('/')
	.get(getClasses)
	.post(createClass)

router.route('/:id')
	.delete(deleteClass);


module.exports = router;
