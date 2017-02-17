//This component handles the Home template
import React, {PropTypes} from 'react';
import LineChart from '../common/LineChart';

const Student = (props)=>{
		console.log('student component props',props.student);
		return (
			<div>
				<h1>Students</h1>
				{!props.student.name ?
					<p>Loading...</p> :
					<ul>
						<p>name: {props.student.name}</p>
						<p>email: {props.student.email}</p>
						<p>address: {props.student.address}</p>
						<ul>Grades:
							{props.student.Grades.map((grade,indx)=>
								(<li key={indx}>
									{grade.type}:
									{grade.grade}

								</li>))}
						</ul>
						<LineChart grades={props.student.Grades}/>
					</ul>
				}
			</div>
		);

};

export default Student;
