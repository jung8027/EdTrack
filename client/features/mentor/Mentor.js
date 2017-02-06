import React, {PropTypes} from 'react';
// import {fetchMentors} from './MentorAction';


class Mentor extends React.Component {
	constructor(props) {
    super(props);
  }

	render() {
		console.log('app', this.props);
		return (
			<div>
				<h1>Mentors</h1>
				{(this.props.mentors.data) ? this.props.mentors.data.map((ele,indx)=>(
					<div key={indx}>
					<p><strong>Name:</strong> {ele.name} <strong>Email:</strong> {ele.email}</p>
					</div>
				)) : null
			}
				<button onClick={this.props.fetchMentors}>Get Mentors</button>
			</div>
		);
	}
}

export default Mentor;
