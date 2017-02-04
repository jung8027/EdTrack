//This component handles the Home template
import React, {PropTypes} from 'react';


class Student extends React.Component {

	render() {
		console.log('student component props',this.props);
		return (
			<div>
				<h1>Student hello</h1>
			</div>
		);
	}
}

export default Student;
