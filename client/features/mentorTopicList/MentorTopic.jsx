import React, {PropTypes} from 'react';
import axios from 'axios';
import querystring from 'querystring';
import $ from 'jquery';

const MentorTopic = React.createClass({

	getInitialState(){
		return {
			topics: [], selectedTopics: [], mentor: this.props.mentorId
		};
	},

	componentDidMount(){
		axios.get('/api/topic/')
			.then((topicData) => this.setState({
				topics: topicData.data
			}));
		this.getMentor()
	},

	getMentor(){
		axios.get('/api/mentor/' + this.props.mentorId)
		.then((mentorData) => this.setState({
			mentor: mentorData.data
		}));
	},

	handleChange(event) {
		console.log('click1', event.target.value)
		let topicName = event.target.value;
		let selected = this.state.selectedTopics;
		(!event.target.checked)
			? this.setState({selectedTopics: selected.filter(topic => parseInt(topic) != parseInt(topicName))})
			: this.setState({selectedTopics: [...selected, parseInt(topicName)]});
			console.log('click1', event.target.value)
	},
	onSubmit(){
		let stringify = JSON.stringify(this.state.selectedTopics);
		axios.post('/api/mentor/' + this.props.mentorId + '/topic',
			querystring.stringify({selectedTopics: stringify})
		)
			.then((response) => {
				console.log(response);
			})
			.catch((error) => {
				console.log(error);
			});
		this.getMentor();
	},
	render(){
		$(".topicBtn").click(function () {
		$(this).css({"background-color": "white", "color": "#545F7A"});
	});

		console.log('mentor whatever', this.props.mentor)
		return (
			<div className="col s4">
					<div id="mentorTop-cont">
					{
						(this.state.mentor)
							? <div>
							<br/>
							<h3 id="prof-Name"> {this.state.mentor.name} is familiar with these topics:</h3>
							{this.state.mentor.Topics.map((topic, indx) =>
								<p key={indx}>{topic.name}<i className="material-icons right" id="check-btn">checked</i></p>
							)}
						</div>
							: <p>loading profile...</p>
					}

					<h3>Please click on the list of topics to add more:</h3>

					<div id="addMoreTopics">
					<ul className="items" style={listStyle}>
						{
							(this.state.topics)
								? this.state.topics.map((topic, indx) => (
								<li key={indx}>

									{/*<input type="checkbox" id={topic.id} value={topic.id} onChange={this.handleChange}/>*/}
										<input style={TopicsBtn} className="topicBtn" type="button" id={topic.id} name={topic.id} value={topic.name} onClick={this.handleChange}/>
								</li>
							))
								: <p>loading list...</p>
						}
						</ul>
					</div>



					<button className="btn waves-effect waves-light"  onClick={this.onSubmit}>Submit
					<i className="material-icons right">send</i>
					</button><br/><br/>
					<button className="btn waves-effect waves-light" id="btnMatch" type="button" >Students
						<i className="material-icons right">send</i>
					</button>

					<button className="btn waves-effect waves-light" id="btnMatch" type="button" >Match
						<i className="material-icons right">send</i>
					</button>
				</div>
			</div>
		);
	}
});

MentorTopic.propTypes = {
	mentorId: PropTypes.number
};
let listStyle = {
	display: "flex",
	flexWrap: "wrap",
	width: "100px",
	height: "250px"
};

let TopicsBtn = {
	width: "180px",
	height: "35px",
	backgroundColor: "#545F7A",
	border: "1px solid #FFFFFF",
	borderRadius: "100px",
	marginLeft: "100px",
	color: "#FFFFFF"
};



export default MentorTopic;




// is working
// import React, {PropTypes} from 'react';
// import axios from 'axios';
// import querystring from 'querystring';

// const MentorTopic = React.createClass({
// 	getInitialState(){
// 		return {
// 			topics: [], selectedTopics: [], mentor: this.props.mentorId
// 		};
// 	},

// 	componentDidMount(){
// 		axios.get('/api/mentor/' + this.props.mentorId)
// 			.then((mentorData) => this.setState({
// 				mentor: mentorData.data
// 			}));

// 		axios.get('/api/topic/')
// 			.then((topicData) => this.setState({
// 				topics: topicData.data
// 			}));
// 	},


// 	handleChange(event) {
// 		let topicName = event.target.value;
// 		let selected = this.state.selectedTopics;
// 		(!event.target.checked)
// 			? this.setState({selectedTopics: selected.filter(topic => parseInt(topic) != parseInt(topicName))})
// 			: this.setState({selectedTopics: [...selected, parseInt(topicName)]});
// 	},
// 	onSubmit(){
// 		let stringify = JSON.stringify(this.state.selectedTopics);
// 		axios.post('/api/mentor/' + this.props.mentorId + '/topic',
// 			querystring.stringify({selectedTopics: stringify})
// 		)
// 			.then((response) => {
// 				console.log(response);
// 			})
// 			.catch((error) => {
// 				console.log(error);
// 			});
// 	},
// 	render(){
// 		console.log('mentor whatever', this.props.mentor)
// 		return (
// 			<div className="col s4">
// 					<div id="mentorTop-cont">
// 					{
// 						(this.state.mentor)
// 							? <div>
// 							<br/>
// 							<h3 id="prof-Name"> {this.state.mentor.name} is familiar with these topics:</h3>
// 							{this.state.mentor.Topics.map((topic, indx) =>
// 								<p key={indx}>{topic.name}<i className="material-icons right" id="check-btn">checked</i></p>
// 							)}
// 						</div>
// 							: <p>loading profile...</p>
// 					}

// 					<h3>Please click on the list of topics to add more:</h3>
// 					{
// 						(this.state.topics)
// 							? this.state.topics.map((topic, indx) => (
// 							<div key={indx}>
// 								<input type="checkbox" id={topic.id} value={topic.id} onChange={this.handleChange}/>
// 								<label htmlFor={topic.id}><p>{topic.name}</p></label>
// 							</div>
// 						))
// 							: <p>loading list...</p>
// 					}
// 					<button className="btn waves-effect waves-light"  onClick={this.onSubmit}>Submit
// 					<i className="material-icons right">send</i>
// 					</button>
// 				</div>
// 			</div>
// 		);
// 	}
// });

// MentorTopic.propTypes = {
// 	mentorId: PropTypes.number
// };

// export default MentorTopic;
