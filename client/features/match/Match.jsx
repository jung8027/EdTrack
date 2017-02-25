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
	}
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
		// disabled until actual use

		// let EmailList = this.state.filteredList;
		// for( let i = 0; i < EmailList; i++){
		// 	axios.post("/api/email",
		// 			querystring.stringify({
		// 				from: "edtrack@googlegroups.com",
		// 				to: EmailList.mentorEmail,
		// 				students: EmailList.students,
		// 				teachingTopic: EmailList.teachingTopic
		// 		})
		// 	);
		// }
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
			<div className="row" style={dashContainer}>

				{/*LEFT PANEL*/}
				<div className="col s8" style={leftPaneItem}>
					<div>
						<h1>Mentor Groups </h1>
					</div>
			    { /*MENTOR GROUPS CARDS*/
						(this.state.filteredList)
							? (this.state.filteredList.map( (group, i) => (
								<div key={i} className="card horizontal" style={cardContainer} >
									<div className="card-image" style={mentorItem}>

										<figure style={mentorFig}>
											<img style={mentorImg} src="/a4660052d5b6fee6192db0b5aeede812.png" />
											<figcaption>{group.mentorName}</figcaption>
										</figure>

									</div>

									<div  className="card-stacked" style={studentItem}>
										<div className="card-content" style={studentsColumn}>
												{
													group.students.map(( student,i ) => (
														<p key={i}>
															<figure style={studentFig}>
																<img style={studentImg} src="/a4660052d5b6fee6192db0b5aeede812.png" />
																<figcaption>{student}</figcaption>
															</figure>
														</p>
													))
												}
										</div>
									</div>

									<div  className="card-stacked" style={topicItem}>
										<div className="card-content">
											<p>Topic</p>
											<p className="header" id="teachingTopic">
												<strong>{group.teachingTopic}</strong>
											</p>
										</div>
									</div>
								</div>
							)))
							: null
					}
				</div>


				{/*RIGHT PANEL*/}
				<div className="col s4" style={rightPaneItem}>
					{
						(this.state.matchConfirm === "CONFIRM")
							? (
								<div>
									<h2 style={matchH2Tag}>Before we notify your mentors, do you approve of these groups ?</h2>
									<button className="btn waves-effect waves-light" id="btnMatch" type="button" onClick={this.notifyMentors} >Yes, Notify Mentors
											<i className="material-icons right">send</i>
									</button>
									<br/><br/>
									<button className="btn waves-effect waves-light" id="btnMatch" type="button" onClick={()=>browserHistory.push(`/instructor/1`)} >Back
											<i className="material-icons right">send</i>
									</button>
								</div>
								)
							: (
								<div>
									<h2 style={matchH2Tag}><strong>Done! </strong>We sent your mentors an email with all the info they'll need.</h2>
									<button className="btn waves-effect waves-light" id="btnMatch" type="button" onClick={()=>browserHistory.push(`/instructor/1`)} >Return Home
											<i className="material-icons right">send</i>
									</button>
								</div>
								)
					}
				</div>
			</div>
		);
	}
}

let dashContainer = {
	display: "flex",
	flexDirection: "row",
	justifyContent: "center",
	alignItems: "center",
}

/*****************LEFT PANE******************/
let leftPaneItem = {
	display: "flex",
	flexDirection: "column",
	justifyContent: "flex-start",
	alignItems: "center",

	backgroundColor: "white",
	color: "#545F7A",
	height: "100%",
	minHeight: "100vh"
};

let cardContainer = {
	display: "flex",
	flexDirection: "row",
	justifyContent: "space-between",
	alignItems: "flex-start",
	height: "200px",
}

let mentorItem = {
	flex: "1",
}

let studentItem = {
	flex: "1",
}

let topicItem = {
	flex: "1",
}

let studentsColumn = {
	display: "flex",
	flexDirection: "column",
	justifyContent: "space-between",
	height: "200px",
	overflow: "scroll",
}

let mentorFig = {
	height: "130px",
	width: "130px",
};

let mentorImg = {
	"maxWidth": "100%",
	"maxHeight": "100%",
}

let studentFig = {
	display: "flex",
	justifyContent: "center",
	alignItems: "center",

	height: "60px",
	width: "60px",
};

let studentImg = {
	maxWidth: "100%",
	maxHeight: "100%",
};

/*****************RIGHT PANE******************/
let rightPaneItem = {
	display: "flex",
	flexDirection: "column",
	justifyContent: "center",
	alignItems: "flex-start",
	fontFamily: "Rubik",
	fontSize: "24px",
	lineHeight: "28px",
	color: "#545F7A",
};


let matchH2Tag = {
	fontWeight: "200"
};

const mapStateToProps = state => ({
		mentors: state.mentorReducer,
		students: state.studentReducer.students
	});

const mapDispatchToProps = dispatch => (
	bindActionCreators({
		fetchMentors,fetchStudents
	}, dispatch)
);
export default connect( mapStateToProps , mapDispatchToProps)( Match );
