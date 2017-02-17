import {connect} from 'react-redux';
import Topic from './Topic';
import React, {Component, PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import {fetchTopics, addStudentTopic, fetchStudentTopic} from './TopicAction';


class TopicContainer extends Component {
	constructor(props, context) {
		super(props, context);
		this.handleClick = this.handleClick.bind(this);
		this.logger = this.logger.bind(this);
		this.props.fetchTopics();
		this.props.fetchStudentTopic(this.props.params.id);
		this.selected = [];

	}

	logger(event) {
		let topicName = event.target.name;
		this.selected.push(parseInt(topicName));
		$(this).style.backgroundColor = "white";
		// (!event.target.checked)
		// 	? this.selected = this.selected.filter(topic => parseInt(topic) != parseInt(topicName))
		// 	: this.selected.push(parseInt(topicName));
	}

	handleClick(e) {
		e.preventDefault();
		this.props.addStudentTopic(this.props.params.id, this.selected);
	}

	render() {
		return (
			<Topic {...this.props}
				   handleClick={this.handleClick}
				   logger={this.logger}
				   selected={this.selected}
			/>
		);
	}
}

TopicContainer.propTypes = {
	fetchTopics: PropTypes.func,
	addStudentTopic: PropTypes.func,
	handleClick: PropTypes.func,
	logger: PropTypes.func,
	fetchStudentTopic: PropTypes.func
};

const mapDispatchToProps = (dispatch) => (
	bindActionCreators({fetchTopics, addStudentTopic, fetchStudentTopic}, dispatch)
);

const mapStateToProps = state => {
	return {
		topics: state.topicReducer.topics,
		selectedTopics: state.topicReducer.selectedTopics,
		studentTopics: state.topicReducer.studentTopics
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(TopicContainer);
