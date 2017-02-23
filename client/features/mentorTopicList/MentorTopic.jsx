import React, {PropTypes} from 'react';
import axios from 'axios';
import querystring from 'querystring';
import $ from 'jquery';
import {browserHistory} from 'react-router';

const MentorTopic = React.createClass({

	getInitialState(){
		return {
			topics: [], selectedTopics: [], mentor: null
		};
	},

	componentDidMount(){
		axios.get('/api/topic/')
			.then((topicData) => this.setState({
				topics: topicData.data
			}));
		this.getMentor()
	},

  componentDidUpdate: function(prevProps, prevState) {
    	console.log("component did update")
    	// console.log("prev state mentor: ", prevState.mentor)
    	// console.log("props mentor id: ", this.props.mentorId)

    	if (!this.state.mentor){
    		return
    	}
    	if (this.state.mentor.id !== this.props.mentorId){
    		this.getMentor();
    	}
  },
	getMentor(){
		axios.get('/api/mentor/' + this.props.mentorId)
		.then((mentorData) => this.setState({
			mentor: mentorData.data
		}));
	},

	logger(event) {
        let topicName = event.target.name;
        let selected = this.state.selectedTopics;
        (!event.target.name)
            ? this.setState({selectedTopics: selected.filter(topic => parseInt(topic) != parseInt(topicName))})
            : this.setState({selectedTopics: [...selected, parseInt(topicName)]});
            console.log('selectedTopics1', selected)
    },


	onSubmit(){
		let stringify = JSON.stringify(this.state.selectedTopics);
		axios.post('/api/mentor/' + this.props.mentorId + '/topic',
			querystring.stringify({selectedTopics: stringify})
		)
			// .then((response) => {
			// 	console.log(response);
			// })
			// .catch((error) => {
			// 	console.log(error);
			// });
		browserHistory.push(`/instructor/1/mentor`);
		this.getMentor();
		this.getMentor();

		console.log('getMentor1', this.props.mentorId)
		console.log('MentorLast1', this.mentor)

	},
	render(){

		$(".topicBtn").click(function () {
		$(this).css({"background-color": "white", "color": "#545F7A"});
	});

		console.log('mentor side menu: selected Id', this.props.mentorId)
		return (
			<div className="col s4">

					<div id="mentorTop-cont">
					{
						(this.state.mentor)
							? <div>
							<br/>
							<h3 id="prof-Name"> {this.state.mentor.name}'s topics:</h3>
							{this.state.mentor.Topics ?
								this.state.mentor.Topics.map((topic, indx) =>
								<p key={indx}>{topic.name}<i className="material-icons right" id="check-btn">checked</i></p>
							)
							:
								<p>Loading Mentor Topics...</p>
							}
						</div>
							: <p>loading profile...</p>
					}

					<h3 id="pleaseAddTopics">Please add or remove topics this mentor is familiar with:</h3>

						{/*adding double columns MentorTopic*/}

					<div id="addMoreTopics">
					<ul className="items" style={listStyle}>
						{
							(this.state.topics)
								? this.state.topics.map((topic, indx) => (
								<li key={indx}>

									{/*<input type="checkbox" id={topic.id} value={topic.id} onChange={this.handleChange}/>*/}
										<input style={TopicsBtn} className="topicBtn" type="button" id={topic.id} name={topic.id} value={topic.name} onClick={this.logger}/>
								</li>
							))
								: <p>loading list...</p>
						}
						</ul>
					</div>

					<button className="btn waves-effect waves-light" id="saveTopicsButton" onClick={this.onSubmit}>Save
					<i className="material-icons right">send</i>
					</button><br/><br/>
					<button className="btn waves-effect waves-light" id="btnMatch" type="button" onClick={()=>browserHistory.push(`/instructor/1`)} >Students
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

// MentorTopic.propTypes = {
// 	mentorId: PropTypes.number
// };
let listStyle = {
	display: "flex",
	flexWrap: "wrap",
	width: "300px",
	height: "250px"
};

let TopicsBtn = {
	width: "150px",
	height: "35px",
	backgroundColor: "#545F7A",
	border: "1px solid #FFFFFF",
	borderRadius: "100px",
	// marginLeft: "100px",
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
