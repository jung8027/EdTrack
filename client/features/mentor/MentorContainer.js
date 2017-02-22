import {connect} from 'react-redux';
import Mentor from './Mentor';
import {bindActionCreators} from 'redux';
import { fetchMentors } from './MentorAction';
import React, {Component, PropTypes} from 'react';

class MentorContainer extends Component {
	constructor(props) {
    super(props);
    this.props.fetchMentors();
    this.handleCardClick = this.handleCardClick.bind(this);
    this.state = {
    	activeRightPane: 'FORM',
    	mentorId: null,
    	activeRightPane1: 'EMAIL'
    }
    console.log('a1',this.state)
  }

  handleCardClick(id) {
  	console.log('id',id)

  	let active = this.state.activeRightPane;
		let newActiveRightPane = active == 'FORM' ? 'TOPICS' : 'FORM';
		this.setState({
			mentorId: id
		});
		this.setState({
			activeRightPane: 'TOPICS'
		});

		console.log('getID1', this.state.mentorId)
	}

	render() {
		return(
			<Mentor {...this.props}
				 mentorId={this.state.mentorId}
				 activeRightPane={this.state.activeRightPane}
				 activeRightPane1={this.state.activeRightPane1}
				 handleCardClick={this.handleCardClick}
				 displayTopicOrEmail={this.displayTopicOrEmail}

				 />
		);
	}
}

MentorContainer.propTypes = {
	fetchMentors: PropTypes.func,
	activeRightPane: PropTypes.string,
	handleCardClick: PropTypes.func
};

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    fetchMentors
  }, dispatch)
);

const mapStateToProps = state => {
	return {
		mentors: state.mentorReducer
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(MentorContainer);
