import React, {PropTypes} from 'react';

const Mentor = (props) => {
	return (
		<div>
			<h1>Full List of Mentors:</h1>
			{(props.mentors) ? props.mentors.map((ele,indx)=>(
				<div key={indx}>
				<p><strong>Name:</strong> {ele.name} <strong>Email:</strong> {ele.email}</p>
				</div>
			)) : null
		}
		</div>
	);
};

Mentor.propTypes = {
	mentors: PropTypes.array,
};

export default Mentor;
