import React, {PropTypes} from 'react';


const Grade = (props)=>{
		console.log('grade component props', props);
		let grade = props.grade.data; // Array[21]
		return (
			<div>
				<h1>Grade Info</h1>
				{!grade ?
					<p>Loading...</p> :
					<div>
						<h3>Hey Student {grade.StudentId}, these are your grades for this unit:</h3> <br/>
						<ul>
							{
								grade.map( (grade, index) => (
									<li key={index}>
										{grade.type}: {grade.grade}
									</li>
								))
							}
						</ul>
						
					</div>
				}
			</div>
		);

};

export default Grade;


// <div>
// 	<h3>Hey Student {grade.StudentId}, </h3>
// 	<h4> You got a <strong>{grade.grade}</strong> on your <stong>{grade.type}</stong>
// 	</h4>
// </div>