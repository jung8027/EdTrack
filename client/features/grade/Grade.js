import React, {PropTypes} from 'react';
import LineChart from '../common/LineChart';

const Grade = (props) => {
	console.log('grade component props', props.students);
	let grade = props.grade;
	let student = props.studentId;
	if (grade) {
		var studentGrades = grade.filter(grade => grade.StudentId === student);
		var studentAverage = studentGrades.reduce((gradesSum, currentGrade) => gradesSum + currentGrade.grade, 0) / studentGrades.length;
		var classAverage = grade.reduce((gradesSum, currentGrade) => gradesSum + currentGrade.grade, 0) / grade.length;

	}
	return (
		<div>
			{!grade ?
				<p>Fetching grades...</p> :
				<div className="row" style={{width:"60%"}}>
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
						<span style={gradeStyles} >{studentGrades.filter(grade => grade.type==='final')[0].grade.toFixed(2)|| '-'}</span>
						<br/>
						<span style={Gradelabel} >Final Grade </span>
					</div>
				</div>
			}

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
