import React, {PropTypes} from 'react';
import axios from 'axios';
import querystring from 'querystring';

const MentorTopic = React.createClass({
	getInitialState(){
		return{
			topics: [], selectedTopics: [], mentor: ''
		};
	},
	componentDidMount(){
		axios.get('/api/mentor/' + this.props.params.mentorId)
		.then((mentorData) => this.setState({
			mentor: mentorData.data
		}));

		axios.get('/api/topic/')
		.then((topicData) => this.setState({
			topics: topicData.data
		}));
	},
	handleChange(event) {
		let topicName = event.target.value;
		let selected = this.state.selectedTopics;
		(!event.target.checked)
			? this.setState({selectedTopics: selected.filter(topic => parseInt(topic) != parseInt(topicName))})
			: this.setState({selectedTopics: [...selected, parseInt(topicName)]});
	},
	onSubmit(){
		let stringify = JSON.stringify(this.state.selectedTopics);
		axios.post('/api/mentor/'+ this.props.params.mentorId+ '/topic',
			querystring.stringify({selectedTopics: stringify})
		)
		.then((response) => {
			console.log(response);
		})
		.catch((error) => {
			console.log(error);
		});
	},
	render(){
		return(
			<div>
				{
					(this.state.mentor)
						?	<div>
								<br/>
								<h3>Hello {this.state.mentor.name} </h3>
								<h4><strong>Email:</strong> {this.state.mentor.email}</h4>
								<h4>You already know these topics:</h4>
								{this.state.mentor.Topics.map((topic, indx) =>
									<p key={indx}>{topic.name}</p>
								)}
							</div>
						: <p>loading profile...</p>
				}

				<h3>Please click on the list of topics you are willing to teach:</h3>
				{
					(this.state.topics)
						? this.state.topics.map((topic, indx) => (
								<div key={indx}>
									<input type="checkbox" id={topic.id} value={topic.id} onChange={this.handleChange}/>
									<label htmlFor={topic.id}><p>{topic.name}</p></label>
								</div>
							))
						: <p>loading list...</p>
				}
				<button onClick={this.onSubmit}>Submit</button>
			</div>
		);
	}
});

MentorTopic.propTypes = {
	params: PropTypes.number,
	mentorId: PropTypes.number
};

export default MentorTopic;
