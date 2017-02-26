
// function that calculates the average grade of all students by type
export const getAllAvgs= (studentsGrades, type)=>{
	let filteredType = studentsGrades.filter(student=> student.type===type);
	let gradeSum= filteredType.reduce((sum,val)=> sum +=val.grade,0);

	let typesAvg = gradeSum/filteredType.length;
	return parseFloat(typesAvg.toFixed(2))

};

// function that calculates the average grade of one student by id and by grade type
export const getAvgsByStudentId = (studentsGrades, type, id)=>{
	let filteredType = studentsGrades.filter(student=> student.type===type&& student.StudentId===id);
	console.log('grade Filter', filteredType);
	let gradeSum= filteredType.reduce((sum,val)=> sum +=val.grade,0);

	let typesAvg = gradeSum/filteredType.length;
	return parseFloat(typesAvg.toFixed(2))

};
