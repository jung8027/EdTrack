import {connect} from 'react-redux';
import Mentors from './Mentors';
import {bindActionCreators} from 'redux';
import { fetchMentors } from './MentorAction';
import React, {Component, PropTypes} from 'react';
import '../../styles/AddMentor.css';

class MentorContainer extends Component {
	constructor(props) {
    super(props);
    this.props.fetchMentors();
    this.handleCardClick = this.handleCardClick.bind(this);
    this.state = {
    	activeRightPane: 'FORM',
    	selectedMentorId: null,
    	activeRightPane1: 'EMAIL'
    }
  }

  handleCardClick(id) {
	  this.setState({
		  selectedMentorId: id,
		  activeRightPane: 'TOPICS'
	  });
		$('.card').removeClass('highlight')
	  $('#mentorCard' + id).addClass('highlight')
	}

	render() {
		console.log('selected mentor id:', this.state.selectedMentorId)
		return(
			<Mentors {...this.props}
				 selectedMentorId={this.state.selectedMentorId}
				 activeRightPane={this.state.activeRightPane}
				 activeRightPane1={this.state.activeRightPane1}
				 handleCardClick={this.handleCardClick}

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
