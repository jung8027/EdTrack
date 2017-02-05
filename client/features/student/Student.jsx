//This component handles the Home template
import React, {PropTypes} from 'react';


// class Student extends React.Component {
const Student = (props)=>{
		console.log('student component props',props.student.data);
		return (
			<div>
				<h1>Students</h1>
				{!props.student.data ?
					<p>Loading...</p> :
					<ul>
						<p>name: {props.student.data.name}</p>
						<p>email: {props.student.data.email}</p>
						<p>address: {props.student.data.address}</p>
						<ul>Grades:
							{props.student.data.Grades.map((grade,indx)=>
								(<li key={indx}>
									{grade.type}:
									{grade.grade}

								</li>))}
						</ul>
					</ul>
				}
			</div>
		);

};

export default Student;
