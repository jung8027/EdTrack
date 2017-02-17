const express = require('express');
const router = express.Router();
const models = require('../models');
const fs = require('fs');
const path = require('path');
const multer = require('multer');
const upload = multer({dest: path.join(__dirname,'../images')});


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
	const renameImg = () => {
		return new Promise((res, rej) => {
		  let fileExists = req.files[0] ? true : false;
		  console.log('fileExists1',fileExists)
		  console.log('req.files1',req.files)
		  if(fileExists) {
	      res(req.files[0]);
	    } else {
	      rej('IMAGE WAS NOT SUPPLIED');
	    }
	  })
  }

  renameImg()
	.then((file) => {
		let extension = '.'+ file.mimetype.split('/')[1];
		let oldPath = file.destination + '/' + file.filename;
		let newPath = file.destination + '/' + file.filename + extension;

		let imgPath  = '/image' + '/' + file.filename + extension;

		fs.rename(oldPath, newPath);
		console.log('imgPath1',imgPath)
		return imgPath;
	})
	.then((imgPath) => {
		let img_path = req.body.img_path;

		return models.Student.update(
		{ img_path: imgPath },
		{ where: { id: req.params.id } }
		)
	})
		.then((data) => {
		console.log("SUCCESS! posted new photo")
		res.send(data)
	})
	.catch( (err) => {
		console.log("ERROR POSTING A NEW PHOTO:", err)
		res.sendStatus(500)
	})
}



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
			{model: models.Topic}
		]
	})
		.then(topics => {
			topics.getTopics();
			res.send(topics);
		});
};

//Adds multer middleware
router.use(upload.any())

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
