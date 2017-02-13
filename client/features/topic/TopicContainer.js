import {connect} from 'react-redux';
import Topic from './Topic';
import React, {Component, PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import {fetchTopics,addStudentTopic} from './TopicAction';



class TopicContainer extends Component{
	constructor(props, context){
		super(props, context);
		this.handleClick = this.handleClick.bind(this);
		this.logger = this.logger.bind(this);
		this.selected = [];

	}
	logger(event) {
		let topicName = event.target.value;
		(!event.target.checked)
			? this.selected = this.selected.filter(topic => parseInt(topic) != parseInt(topicName))
			: this.selected.push(parseInt(topicName));
	}
	handleClick(e) {
		e.preventDefault();
		this.props.actions.addStudentTopic(1, this.selected);//1 is a temp student id
	}
	render(){
		return (
			<Topic {...this.props} handleClick={this.handleClick} logger={this.logger} selected={this.selected}/>
		);
	}
}

TopicContainer.propTypes = {
	actions : PropTypes.object,
	fetchTopics: PropTypes.func,
	addStudentTopic: PropTypes.func,
	handleClick : PropTypes.func,
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
