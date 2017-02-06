const express = require('express');
const router = express.Router();
const models = require('../models');


// GET all students information fully populated
const getStudents = (req, res) => {
	models.Student.findAll({})
		.then((students) => {
			res.send(students);
		});
};

// GET specific student by id and include grade information
const getStudent = (req, res) => {
	models.Student.findOne({
		where: {id: req.params.id},
		include: [{
			model: models.Grade
		}]
	})
		.then(student => {
			res.send(student);
		});
};

// POST (create) a new student
const postStudent = (req, res) => {
	models.Student.create({
		name: req.body.name,
		email: req.body.email,
		address: req.body.address
	}).then((newStudent) => {
		res.send(newStudent);
	});
};


// // PUT (update) an existing student
const updateStudent = (req, res) => {
	models.Student.findOne(
		{
			where: {id: req.params.id}
		}
	).then((student) => {
		student.update(
			{
				name: req.body.name,
				email: req.body.email,
				address: req.body.address
			}

		).then(updatedStudent=> res.send(updatedStudent))
	})
};


// DELETE (delete) a student
const deleteStudent = (req, res) => {
	models.Student.destroy({
		where: {id: req.params.id}
	}).then(() => {
		res.send('student has been deleted');
	});
};


router.route('/')
	.get(getStudents)
	.post(postStudent);

router.route('/:id')
	.get(getStudent)
	.put(updateStudent)
	.delete(deleteStudent);


module.exports = router;
