const router = require("express").Router();
const models = require("../models");

const getAllGrades = (req, res) => {
	models.Grade.findAll({})
		.then(allGrades => res.send(allGrades));
};

const postGrade = (req, res) => {
	models.Grade.create({
		grade: req.body.grade,
		type: req.body.type,
		StudentId: req.body.StudentId
	})
		.then(newGrade => res.send(newGrade));
};

const getGrade = (req, res) => {
	models.Grade.findOne({where: {id: req.params.id}})
		.then(grade => res.send(grade));
};

const updateGrade = (req, res) => {
	models.Grade.findOne({where: {id: req.params.id}})
		.then(grade => grade.update({
			grade: req.body.grade,
			type: req.body.type,
			StudentId: req.body.StudentId
		}))
		.then(updatedGrade => res.send(updatedGrade));
};

const deleteGrade = (req, res) => {
	models.Grade.destroy({where: {id: req.params.id}})
		.then(() => res.send("grade removed"));
};

router.route("/")
	.get(getAllGrades)
	.post(postGrade);

router.route("/:id")
	.get(getGrade)
	.put(updateGrade)
	.delete(deleteGrade);

module.exports = router;
