import {connect} from 'react-redux';
import Topic from './Topic';
import React, {Component, PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import {fetchTopics, addStudentTopic, fetchStudentTopic} from './TopicAction';
import {browserHistory} from 'react-router';


class TopicContainer extends Component {
	constructor(props, context) {
		super(props, context);
		this.state = {
			active: 'TOPICS'

		};
		console.log('active state: ',this.state.active);
		this.handleClick = this.handleClick.bind(this);
		this.logger = this.logger.bind(this);
		this.props.fetchTopics();
		this.props.fetchStudentTopic(this.props.params.id);
		this.selected = [];

	}

	logger(event) {
		let topicName = event.target.name;
		this.selected.push(parseInt(topicName));
		// (!event.target.checked)
		// 	? this.selected = this.selected.filter(topic => parseInt(topic) != parseInt(topicName))
		// 	: this.selected.push(parseInt(topicName));
	}

	handleClick(e) {
		e.preventDefault();
		this.props.addStudentTopic(this.props.params.id, this.selected);
		let active = this.state.active;
		let newActive = active === 'TOPICS' ? 'SELECTED' : 'TOPICS';

		this.setState({
			active: newActive
		});
		console.log('newactive state',newActive)
	}
	handleSubmit(e){
		e.preventDefault();
		browserHistory.push('/mentor');
	}
	render() {
		return (
			<Topic {...this.props}
				   handleClick={this.handleClick}
				   logger={this.logger}
				   selected={this.selected}
				   active={this.state.active}
				   handleSubmit = {this.handleSubmit}
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
