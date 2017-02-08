import { connect } from 'react-redux';
import Topic from './Topic';
import { bindActionCreators } from 'redux';
import { fetchTopics } from './TopicAction';

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    fetchTopics,
  }, dispatch)
);


const mapStateToProps = state => {
	return {
		topics: state.topicReducer
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Topic);
