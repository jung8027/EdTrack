import React, {Component, PropTypes} from "react";
import { browserHistory } from 'react-router';
import axios from 'axios';
import querystring from 'querystring';
import matchingAlgorithm from './MatchingAlgorithm';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { fetchMentors } from '../mentor/MentorAction';
import { fetchStudents } from '../student/studentActions';

const match = [
			{
				mentorName: "Justin",
				mentorEmail: "Justin@gmail.com",
				teachingTopic: "DSA",
				students: ["Iliass, Jung, Luis, Quan"],
				img_path: "/c805236406941d2ba6b9398291266281.png"
			},
			{
				mentorName: "Justin",
				mentorEmail: "Justin@gmail.com",
				teachingTopic: "DSA",
				students: ["Iliass, Jung, Luis, Quan"],
				img_path: "/c805236406941d2ba6b9398291266281.png"
			},
			{
				mentorName: "Justin",
				mentorEmail: "Justin@gmail.com",
				teachingTopic: "DSA",
				students: ["Iliass, Jung, Luis, Quan"],
				img_path: "/c805236406941d2ba6b9398291266281.png"
			},
			{
				mentorName: "Justin",
				mentorEmail: "Justin@gmail.com",
				teachingTopic: "DSA",
				students: ["Iliass, Jung, Luis, Quan"],
				img_path: "/c805236406941d2ba6b9398291266281.png"
			},


		];

class Match extends Component{
	constructor( props ) {
		super( props );
		this.props.fetchMentors();
		this.props.fetchStudents();
		this.setFilteredList = this.setFilteredList.bind(this);
		this.notifyMentors = this.notifyMentors.bind(this);
		this.state = {
			filteredList: null,
			matchConfirm : "CONFIRM"
		};
	}

	setFilteredList(array){
		this.setState({ filteredList: array });
	}

	notifyMentors(){
		this.setState({ matchConfirm: "DONE" });
	}

	componentWillReceiveProps(props){
		let students= props.students;
		let mentors = props.mentors;
		if(students.length > 0 && mentors.length > 0){
			let result = matchingAlgorithm(mentors,students);
			let results = result.filter(groups=> groups.students.length > 0);
			return this.setFilteredList(results);
		}
	}

	render(){
		return (
			<div className="row" style={{height: "100%"}}>

					<div > {/*LEFT PANEL*/}
						<div className="col s8" style={DashStyles}>
							<div>
								<h1>Mentor Groups </h1>
							</div>

							{ /*MENTOR GROUPS CARDS*/
								(this.state.filteredList)
									? (this.state.filteredList.map( (mentor, i) => {
											let studentList = mentor.students.map(student => student).join(', ');
											return <center key={i}>
												<div id ="mentorCard" className="card horizontal" key={i}>

													<div className="card-image">

														<figure style={imgProfile}>
															<img src="/a4660052d5b6fee6192db0b5aeede812.png" />
															<figcaption>{mentor.mentorName}</figcaption>
														</figure>

													</div>

													<div  className="card-stacked">
														<div className="card-content">
															<p>Student(s): </p>
															<p className="header" id="students">
																<strong>{studentList}</strong>
															</p>
														</div>
													</div>

													<div  className="card-stacked">
														<div className="card-content">
															<p>Topic</p>
															<p className="header" id="teachingTopic">
																<strong>{mentor.teachingTopic}</strong>
															</p>
														</div>
													</div>


												</div>
											</center>
										}))
									: null
							}

						</div>


						{/*RIGHT PANEL*/}
						<div className="col s4" style={rightPaneStyles}>

							{
								this.state.matchConfirm === "CONFIRM" ? (
									<div>
										<center style={{width: "100%"}}>
											<h1>Before we notify your mentors, do you approve of these groups ?
											</h1>
										</center>

										<button className="btn waves-effect waves-light" id="btnMatch" type="button" onClick={this.notifyMentors} >Yes, Notify Mentors
												<i className="material-icons right">send</i>
										</button>
										<br/>
										<br/>
										<button className="btn waves-effect waves-light" id="btnMatch" type="button" onClick={()=>browserHistory.push(`/instructor/1`)} >Back
												<i className="material-icons right">send</i>
										</button>
									</div>

								) : (

									<div>
										<center style={{width: "100%"}}>
											<h1><strong>Done !</strong>We sent your mentors an email with all the info they'll need.</h1>
										</center>

										<button className="btn waves-effect waves-light" id="btnMatch" type="button" onClick={()=>browserHistory.push(`/instructor/1`)} >Return Home
												<i className="material-icons right">send</i>
										</button>
									</div>
								)
							}


						</div>

					</div>

			</div>
		);
	}

}

let DashStyles = {
	backgroundColor: "white",
	color: "#545F7A",
	height: "100%",
	minHeight: "100vh"
};

let rightPaneStyles = {
	width: "317px",
	height: "84px",
	fontFamily: "Rubik",
	fontSize: "24px",
	lineHeight: "28px",
	color: "#545F7A",
	margin: "auto",
};

let imgProfile ={
	height: "150px",
	width: "150px",
	float: "left",
};


const mapStateToProps = state => {
	return {
		mentors: state.mentorReducer,
		students: state.studentReducer.students
	};
};

const mapDispatchToProps = dispatch => (
	bindActionCreators({
		fetchMentors,fetchStudents
	}, dispatch)
);
export default connect( mapStateToProps , mapDispatchToProps)( Match );
