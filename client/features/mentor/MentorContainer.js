import {connect} from 'react-redux';
import Mentor from './Mentor';
import {bindActionCreators} from 'redux';
import { fetchMentors } from './MentorAction';
import React, {Component, PropTypes} from 'react';

class MentorContainer extends Component {
	constructor(props) {
    super(props);
    this.props.fetchMentors();
  }

	render() {
		return(
			<Mentor {...this.props} />
		);
	}
}

MentorContainer.propTypes = {
	fetchMentors: PropTypes.func,
};

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    fetchMentors,
  }, dispatch)
);

const mapStateToProps = state => {
	return {
		mentors: state.mentorReducer
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(MentorContainer);
