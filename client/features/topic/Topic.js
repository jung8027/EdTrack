import React, {PropTypes} from 'react';

class Topic extends React.Component {
	constructor(props, context) {
		super(props, context);
		this.selected = [];
		this.logger = this.logger.bind(this);
		this.handleClick = this.handleClick.bind(this);
	}

	logger(event) {
		let topicName = event.target.value;
		(!event.target.checked)
			? this.selected = this.selected.filter(topic => parseInt(topic) != parseInt(topicName))
			: this.selected.push(parseInt(topicName));
		console.log('topics array', this.selected);
	}

	handleClick() {
		console.log('this.selected', this.selected);
		this.props.actions.addStudentTopic(1, this.selected);//1 is a temp student id
	}

	render() {
		console.log('topic logger', this.logger);
		return (
			<div>
				<h1>Topic</h1>
				{
					(this.props.topics) ? this.props.topics.map((topic, indx) => (
						<div key={indx}>
							<input type="checkbox" id={topic.id} value={topic.id} onChange={this.logger}/>
							<label htmlFor={topic.id}><h4>{topic.name}</h4></label>

						</div>
					)) : <p>loading...</p>
				}
				<input type='submit' value='submit' onClick={this.handleClick}/>
				<br/>
				<h2><strong>Topics that you need help with are :</strong></h2>
				<ul>
					{
						this.selected ?
							this.props.topics.filter(topic => this.selected.includes(topic.id))
								.map((topic, indx) => <li key={indx}><strong>{topic.name}</strong></li>)
							:
							null
					}
				</ul>
			</div>
		);
	}
}

Topic.propTypes = {
	fetchTopics: PropTypes.func,
	addStudentTopic: PropTypes.func,
	handleSubmit: PropTypes.func,
	logger: PropTypes.func
};
export default Topic;
