import {connect} from 'react-redux';
import Topic from './Topic';
import React, {Component, PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import {fetchTopics,addStudentTopic} from './TopicAction';



class TopicContainer extends Component{
	constructor(props, context){
		super(props, context);
		console.log('student topic container props',props);
	}
	render(){
		return (
			<Topic {...this.props} />
		)
	}
}

TopicContainer.propTypes = {
	actions : PropTypes.object,
	fetchTopics: PropTypes.func,
	addStudentTopic: PropTypes.func,
	handleSubmit : PropTypes.func,
	logger : PropTypes.func
};

const mapDispatchToProps=(dispatch)=>({
	actions: bindActionCreators({ fetchTopics, addStudentTopic }, dispatch)
});

const mapStateToProps = state => {
	return {
		topics: state.topicReducer.topics,
		selectedTopics: state.topicReducer.selectedTopics
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(TopicContainer);
