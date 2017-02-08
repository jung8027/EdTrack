import React, {PropTypes} from 'react';

let selectedTopics = [];

class Topic extends React.Component {
	constructor(props){
		super(props);
	}

	logger(event){
		let topicName = event.target.value;
		(!event.target.checked)
			? selectedTopics = selectedTopics.filter(topic => parseInt(topic) != parseInt(topicName))
			: selectedTopics.push(parseInt(topicName));
		console.log('topicsarray', selectedTopics);
	}

	render(){
		console.log('topic', this.props);
		return(
			<div>
				<h1>Topic</h1>
						{
							(this.props.topics) ? this.props.topics.map((topic, indx)=>(
								<div key={indx}>
									<input type="checkbox" id={topic.id} value={topic.id} onChange={this.logger}/>
									<label htmlFor={topic.id}><h4>{topic.name}</h4></label>
								</div>
							)) : <p>loading...</p>
						}
				<input type='submit' placeholder='submit' onClick={this.logger}/>
			</div>
		);
	}
}

export default Topic;
