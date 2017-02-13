import React, { PropTypes } from "react";

const Instructor = props => {
	let instructor = props.instructor.data;

	return (
		<div>
			<h1>Instructor View</h1>
			{ !instructor ?
					<p>Loading Instructor</p> :
					<div>
						Hello, Instructor {instructor.name}, this is your class overview:
					</div>
			}
		</div>
	);
};

Instructor.propTypes = {
	instructor: PropTypes.object,
};

export default Instructor;
