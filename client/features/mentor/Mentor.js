import React, {PropTypes} from 'react';
import {fetchMentors} from './MentorAction';


class Mentor extends React.Component {
	render() {
		return (
			<div>
				<h1>Mentors</h1>
				<button onClick={fetchMentors}>Get Mentors</button>
			</div>
		);
	}
}

export default Mentor;
