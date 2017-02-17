import React, { PropTypes } from "react";

const Instructor = props => {
	console.log("Instructor prop: ", props);
	// let instructor = props.instructor;

	return (
		<div>
			<h1>Instructor View</h1>
			{ !props.instructor ?
					<p>Loading Instructor...</p> :
					<div>
						<h3>Hello, Instructor {props.instructor.name}</h3>

					</div>
			}
		</div>
	);
};

Instructor.propTypes = {
	instructor: PropTypes.object,
};

export default Instructor;
