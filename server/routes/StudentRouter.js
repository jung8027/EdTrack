const express = require('express');
const router = express.Router();
const models = require('../models');


// GET all students information fully populated including their topics selected
const getStudents = (req, res) => {
	models.Student.findAll({include:[{model: models.Topic}]})
		.then((students) => {
			res.send(students);
		});
};

// GET specific student by id and include grade information
const getStudent = (req, res) => {
	models.Student.findOne({
		where: {id: req.params.id},
		include: [
			{
				model: models.Grade
			},
			{
				model: models.Topic
			}
		]
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
		).then(updatedStudent => res.send(updatedStudent));
	});
};


// DELETE (delete) a student
const deleteStudent = (req, res) => {
	models.Student.destroy({
		where: {id: req.params.id}
	}).then(() => {
		res.send('student has been deleted');
	});
};


const addStudentTopicList = (req, res) => {
	models.Student.findOne({
		where: {
			id: req.params.id
		}
	})
		.then(student => {
			student.setTopics(req.body.selectedTopics);
			res.send(student);
		});
};

const getStudentTopicList = (req, res) => {
	models.Student.findOne({
		where: {
			id: req.params.id
		},
		include: [
			{model: models.Topic}
		]
	})
		.then(topics => {
			topics.getTopics();
			res.send(topics);
		});
};

router.route('/')
	.get(getStudents)
	.post(postStudent);

router.route('/:id')
	.get(getStudent)
	.put(updateStudent)
	.delete(deleteStudent);

router.route('/:id/topic')
	.post(addStudentTopicList)
	.get(getStudentTopicList);


module.exports = router;
