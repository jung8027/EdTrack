import React, {PropTypes} from 'react';


const Grade = (props)=>{
		// props has no 'grade' key, props.grade = undefined
		console.log('grade component props', props);
		return (
			<div>
				<h1>Grade Info</h1>
				{!props.grade ?
					<p>Loading...</p> :
					<div>
						<h3>Hey Student {props.grade.StudentId}, </h3>
						<h4> You got a <strong>{props.grade.grade}</strong> on your <stong>{props.grade.type}</stong>
						</h4>
					</div>
				}
			</div>
		);

};

export default Grade;
