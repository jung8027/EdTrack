import React, {PropTypes} from 'react';

class Mentor extends React.Component {
	constructor(props) {
    super(props);
  }

	render() {
		return (
			<div>
				<h1>Mentors</h1>
				{(this.props.mentors) ? this.props.mentors.map((ele,indx)=>(
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

Mentor.propTypes = {
	mentors: PropTypes.array,
	fetchMentors: PropTypes.func
};

export default Mentor;
