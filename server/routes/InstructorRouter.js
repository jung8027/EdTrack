const router = require("express").Router();
const models = require("../models");

const getAllInstructors = (req, res) => {
	models.Instructor.findAll({})
		.then( allInstructors => res.send(allInstructors) );
};

const postInstructor = (req, res) => {
	models.Instructor.create({
		name: req.body.name,
		email: req.body.email
	}).then( newInstructor => {
		newInstructor.dataValues.message = "Instructor added successfully !";
		res.send( newInstructor );
	});
};

const getInstructor = (req, res) => {
	models.Instructor.findOne({ where: { id: req.params.id }})
		.then( instructor => res.send(instructor) );
};

const updateInstructor = (req, res) => {
	models.Instructor.findOne({ where: { id: req.params.id }})
		.then( instructor => instructor.update({
			name: req.body.name,
			email: req.body.email
		}))
		.then( updatedInstructor => res.send( updatedInstructor ));
};

const deleteInstructor = (req, res) => {
	models.Instructor.destroy({ where: { id: req.params.id }})
		.then( () => res.send( "instructor removed" ));
};


router.route("/")
	.get(getAllInstructors)
	.post(postInstructor);

router.route("/:id")
	.get(getInstructor)
	.put(updateInstructor)
	.delete(deleteInstructor);

module.exports = router;
