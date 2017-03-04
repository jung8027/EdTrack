import React from 'react';
import $ from 'jquery';
import  '../../styles/AddMentor.css';
import {browserHistory} from 'react-router';

const AddMentor = React.createClass({
	getInitialState(){
		return{
			mentorName: '', mentorEmail: ''
		};
	},

	handelChange(eventType, event){
		this.setState({[eventType]: event.target.value});
	},

	createMentor(){
		$.ajax({
			url: '/api/mentor',
			method: 'POST',
			data: {
				name: this.state.mentorName,
				email: this.state.mentorEmail,
			}
		})
		.done()
		.then(()=>this.setState({input: ''}));
	},
	render(){
		return(
			<div >
					<div id="form1">
						<center>
							<h1>Add Mentor</h1>
						</center>
						<input id="formInput" type="text" placeholder="Mentor Name" onChange={this.handelChange.bind(this, 'mentorName')} value={this.state.input}/>
						<input id="formInput" type="text" placeholder="Mentor Email" onChange={this.handelChange.bind(this, 'mentorEmail')} value={this.state.input}/>

						<button className="btn waves-effect waves-light" id="btnMatchSubmit" type="button" onClick={this.createMentor}>Submit
							<i className="material-icons right">send</i>
						</button>
					</div>
					<br/>
					<br/>
					<br/>
					<button className="btn waves-effect waves-light" id="btnMatchForm" type="button" onClick={()=>browserHistory.push(`/instructor/1`)}>Students
						<i className="material-icons right">send</i>
					</button>

					<button className="btn waves-effect waves-light" id="btnMatchForm" type="button" onClick={() => browserHistory.push(`/instructor/1/match`)}>Match
						<i className="material-icons right">send</i>
					</button>
			</div>
			);
	}
});

export default AddMentor;
