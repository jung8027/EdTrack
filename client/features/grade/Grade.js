import React, {PropTypes} from 'react';
import LineChart from '../common/LineChart';

const Grade = (props) => {
	// console.log('grade component props', props.students);
	console.log('grade component props' + props.grades);


	let grades = props.grades;
	let student = props.studentId;
	if (grades) {
		var studentGrades = !student? grades : grades.filter(grade => grade.StudentId === student);
		console.log('studentGrades' + studentGrades);
		var studentAverage = studentGrades.reduce((gradesSum, currentGrade) => gradesSum + currentGrade.grade, 0) / studentGrades.length;
		var classAverage = grades.reduce((gradesSum, currentGrade) => gradesSum + currentGrade.grade, 0) / grades.length;
		var finalGrades = studentGrades.filter(grade => grade.type==='final')
		console.log('finalGrades: ' + finalGrades)
        var finalGrade;
		if (finalGrades.length === 1){
			finalGrade = finalGrades[0].grade
		} else {
			finalGrade = finalGrades.reduce((gradesSum, currentGrade) => gradesSum + currentGrade.grade, 0) / finalGrades.length;
		}
	}
	console.log("finalGrade: " + finalGrade);
	return (
			grades.length === 0  ?
				<p>Fetching grades...</p> :
				<div className="row">
					<div className="col s4" >
						<span style={gradeStyles} > {classAverage.toFixed(2)|| '-'}</span>
						<br/>
						<span style={Gradelabel} >Avg Class Grade</span>
					</div>
					<div className="col s4" >
						<span style={gradeStyles} >{studentAverage.toFixed(2)|| '-'}</span>
						<br/>
						<span style={Gradelabel} >Avg Grade </span>
					</div>
					<div className="col s4" >

						{finalGrade?
							<span style={gradeStyles} >{finalGrade.toFixed(2) }</span>
							: null
						}
						<br/>
						<span style={Gradelabel} >Final Grade </span>
					</div>
				</div>
	);
};

let gradeStyles = {
	width: "93px",
	height: "57px",
	fontFamily: "Rubik",
	fontSize: "40px",
	fontWeight: "bold",
	lineHeight: "57px",
	color: "#545F7A"
};

let Gradelabel = {
	width: "80px",
	height: "19px",
	fontFamily: "Rubik",
	fontSize: "14px",
	lineHeight: "19px",
	color: "#545F7A"
};

export default Grade;
