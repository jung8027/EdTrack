const router = require("express").Router();
const Grade = require("../models/Grade.js");

const getAllGrades = (req, res) => {
	Grade.findAll()
	.then(( allGrades ) => res.send( allGrades ));
};

const postGrade = (req, res) => {
	Grade.create({
		grade: req.body.grade,
		type: req.body.type
	});
};

const getGrade = (req, res) => {
	Grade.findOne({ where: { id: req.params.id } })
	.then( (grade) => res.send(grade) );
};

const updateGrade = (req, res) => {
	Grade.findOne({ where: { id: req.params.id } })
	.then( (grade) => grade.update({
		grade: req.body.grade,
		type: req.body.type
	}) );
};

const deleteGrade = (req, res) => {
	Grade.destroy({ where: { id: req.params.id } })
	.then( () => res.send("grade removed") );
};

router.route("/")
	.get(getAllGrades)
	.post(postGrade);

router.route("/:id")
	.get(getGrade)
	.put(updateGrade)
	.delete(deleteGrade);

module.exports = router;
