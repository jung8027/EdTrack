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
			id: req.params.StudentId
		}
	})
		.then(student => {
			console.log('req.body',req.body);
			student.setTopics(req.body.selectedTopics);
			res.send(student);
		});
};

const getStudentTopicList = (req, res) => {
	models.Student.findOne({
		where: {
			id: req.params.StudentId
		},
		include: [
			{model:models.Topic}
			]
	})
		.then(topics => {
			topics.getTopics();
			console.log(topics);
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

router.route('/:StudentId/topicList')
	.post(addStudentTopicList)
	.get(getStudentTopicList);





module.exports = router;
