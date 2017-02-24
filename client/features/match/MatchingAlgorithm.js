function matchingAlgorithm(mentor_topic, student_topic){
	let Groups = [];

	function Group (mentorName, mentorEmail, knownTopics, img_path){
		this.mentorName = mentorName,
		this.mentorEmail = mentorEmail,
		this.knownTopics = knownTopics,
		this.img_path = img_path,
		this.teachingTopic = '',
		this.students = []
	}

	Group.prototype.setTopic = function(topic){
		this.teachingTopic = topic
	};

	Group.prototype.addStudent = function(student){
		this.students.push(student)
	};

	function mentorArr(array){
		for(let i = 0; i < array.length; i ++){
			let topicList = array[i].Topics.map(topic=>topic.name);
			Groups.push(new Group(array[i].name, array[i].email, topicList, array[i].img_path));
		}
		return Groups;
	}

	let sessions = mentorArr(mentor_topic);

	const MAX_STUDENTS = 5;

	function placeStudent(student){
		while (student.Topics.length > 0){
			let topic = student.Topics.pop();
			// Check if sessions is in teachingTopic exists
			let index = sessions.findIndex(session =>
				session.teachingTopic === topic.name &&
				session.students.length <= MAX_STUDENTS
			);
			if (index !== -1){
				sessions[index].addStudent(student.name);
				return;
			} else {
				index = sessions.findIndex(session =>
						session.teachingTopic === "" &&
						session.knownTopics.includes(topic.name)
				);
				if (index !== -1){
					sessions[index].setTopic(topic.name);
					sessions[index].addStudent(student.name);
					return;
				}
			}
		}
	}

	function placeAllStudents(array){
		while (array.length > 0){
			let student = array.pop();
			placeStudent(student);
		}
		return sessions;
	}

	return placeAllStudents(student_topic);
}

module.exports = matchingAlgorithm;
