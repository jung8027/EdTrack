import React, {PropTypes} from 'react';


const Grade = (props)=>{
		console.log('grade component props', props);
		let grade = props.grade.data; // Array[21]
		let student = 3;
		let unit = 5;
		if (grade) {
			var studentGrades = grade.filter( grade => grade.StudentId === student );
			// console.log( "studentGrades", studentGrades);
			var studentAverage = studentGrades.reduce( (gradesSum, currentGrade) => gradesSum + currentGrade.grade, 0) / studentGrades.length ;
			console.log('studentAverage', studentAverage);

			var classAverage = grade.reduce( (gradesSum, currentGrade) => gradesSum + currentGrade.grade, 0) / grade.length ;
		}
		

		return (
			<div>
				<h1>Grade Info</h1>
				{!grade ?
					<p>Fetching grades...</p> :
					<div>
						<h3>Hey Student {student}, these are your grades for unit {unit}:</h3> <br/>
						<ul>
							{	
								grade.map( (grade, index) => {
									if (grade.StudentId === student) {
										return (
											<li key={index}>
												{grade.type}: {grade.grade}
											</li>
										);
									}
								})
							}
						</ul>
						<h4>Class Average: {classAverage} </h4>
						<h4>Your Average:  {studentAverage} </h4>
						{
							studentAverage < classAverage ? (
								<h3> It seems like you're falling behind, which topic(s) would you like to get help with ?
 </h3>
							) : <h3>Looking good !</h3>
						}
					</div>
				}
			</div>
		);

};

export default Grade;