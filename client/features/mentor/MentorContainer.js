import {connect} from 'react-redux';
import Mentor from './Mentor';
import {bindActionCreators} from 'redux';
import { fetchMentors } from './MentorAction';

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

export default connect(mapStateToProps, mapDispatchToProps)(Mentor);
