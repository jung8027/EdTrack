import React, {PropTypes} from "react";
import {browserHistory} from 'react-router';
import LineChart from '../common/LineChart';
import GradeContainer from '../grade/GradeContainer';
import '../../styles/instructor.css';
import Header from '../common/Header';
import Match from '../match/Match.jsx';



const Instructor = props => {
	console.log('instructor component props', props);
	//filter grade less than 60
	let studentsGrades = [];
	const gradeFilter = item => item.grade <= 60 ? item.StudentId : null;

	//returns students ids from filtered grades
	const getLowGrades = students => {
		let studentsLowIds = [];
		students.map(item => studentsLowIds.push(item.Grades.map(gradeFilter))
		);
		return [].concat(...studentsLowIds).filter((val, pos, arr) => val && arr.indexOf(val) == pos);
	};
	let lowGradeIds = getLowGrades(props.students);
	console.log('lowGradeIds', lowGradeIds);
	let lowGradeStudents = props.students.filter(student => lowGradeIds.includes(student.id));
	console.log('lowGradeStudents', lowGradeStudents);
	console.log('props.filter', props.filtered);
	(props.filtered === "ALL") ? studentsGrades = props.students : (props.filtered === "BELOW60") ? studentsGrades = lowGradeStudents : null;
	console.log(studentsGrades);
	let filteredStudent = studentsGrades.filter(student => student.id === props.studentId);
	console.log('filtered student Grades', filteredStudent[0]);
	$('ul.tabs').tabs();
	return (
		<div className="row" style={{height: "100%"}}>
			{
				props.matchState === "MATCH" ?
				<Match matchState={props.matchState}
						students={props.students}
					   mentors = {props.mentors}
				/>
					:
				props.instructor.name ?
				<div >
					<div className="col s8" style={DashStyles}>
						<div style={{width:"100px",textAlign:"center"}}>
							<img src={"/a4660052d5b6fee6192db0b5aeede812.png"} id="instructorImage"/>
							<Header  id="header1"/>
						</div>
						<center>
								<div>
									<p id="currentStudentName">Luis</p>
									<div className="row">
										<div className="col s6" id="colS6">
											<ul className="tabs" id="dashNav">
												<li className="tab col s3" id="allGrades"><a onClick={props.handleClassView} className="active" href="/instructor/1">All Grades</a></li>
												<li className="tab col s3"><a  onClick={props.handleLineChart}>Assignments</a></li>
												<li className="tab col s3"><a className="" href="#">Quizzes</a></li>

											</ul>
										</div>
									</div>
									{props.infoSection === "CLASS" ?
										<div>
											<LineChart grades={props.grades}
													   chartType={props.chartType}
											/>
											<GradeContainer />
										</div>
										: props.infoSection === "STUDENT" ?
										<div>
											<LineChart grades={filteredStudent[0].Grades}
													   chartType={props.chartType}
											/>
											<div className="col s12" style={{width:"625px"}}>
												<GradeContainer studentId={props.studentId}/>
												{!studentsGrades ?
													<div>Loading list of students...</div>
													:

													studentsGrades.filter(student=>student.id===props.studentId).map((student, indx) =>
														(
														props.activeStudentCard === 'TOPICS'
															?
															(
																<div className="card-horizontal" id="topicsImprovement">
																	<div className="card-content">
																		<ul>
																			{student.Topics.map((topic, i) =>
																				<li key={i}><strong>{topic.name}</strong></li>
																			)}
																		</ul>
																		<span>Improvement areas</span>
																	</div>
																</div>
															)
															:
															null

													      )
													)
												}

											</div>
										</div> : null
									}
								</div>
						</center>
					</div>
					<div className="col s4" style={rightPaneStyles}>
						<center style={{width: "100%"}}>
							<br/>
							<br/>
							<div className="row">
								<div style={navTabs} className="col s6 filter">
									<ul className="tabs"  >
										<li className="tab col s3"><a style={filterTabs} onClick={props.handleFilter} >All Students</a></li>
										<li className="tab col s3"><a style={filterTabs} onClick={props.handleFilter}>Needs Improvement</a></li>
									</ul>
								</div>
							</div>

							<ul style={listStyle}>
								{!studentsGrades ?
									<div>Loading list of students...</div>
									:

									studentsGrades.map((student, indx) =>
										(
											<div key={indx} className="col s12" style={info}>
												<div id="studentCards" className="card horizontal">
													<div  style={cardHeader}  onClick={() => props.handleInfo(student.id)} className="card-image" >
														<img style={cardImg} src={student.img_path || "/a4660052d5b6fee6192db0b5aeede812.png"}/>
														<h2 className="header" style={cardTitle}>{student.name}</h2>
														{student.Grades.find(g => g.grade <= 60)
															? (<i style={flag} className="material-icons">flag</i>)
															: null
														}
													</div>
												</div>
											</div>
										)
									)
								}
							</ul>
							<br/>
							<button className="btn waves-effect waves-light" id="btnMentors" type="button"
									onClick={() => browserHistory.push(`/instructor/${props.instructor.id}/mentor`)}>
								Mentors
								<i className="material-icons right">send</i>
							</button>
							<button className="btn waves-effect waves-light" id="btnMatch" type="button" onClick={props.handleMatch}>Match
								<i className="material-icons right">send</i>
							</button>
						</center>
					</div>
				</div>
				:
				 <p>Loading...</p>
			}
		</div>
	);
};
let navTabs ={
	marginLeft:"5px",
	width:"350px",
	height: "100%"
};

let dashNav={
	color:"#545F7A"
};
let filterTabs={
	backgroundColor: "#545f7a",
	color: "#FFFFFF",
	width: "100%",
	height: "100%",
	fontFamily: "Rubik",
	fontSize: "12px",
	fontWeight: "500",
	lineHeight: "19px",
	paddingBottom:"5px",
	paddingLeft:"5px",
	paddingRight:"5px"
};

let heading = {
	paddingLeft: "20px",
	textAlign: "left"
};
let cardImg = {
	height: "80px",
	width: "auto",
	flex: "0 0 0%",
	backgroundColor: "#545F7A",
	borderRadius: "50%"
};
let flag = {
	color:"red",
	flex: "1 0 0%"
};
let cardTitle = {
	color: "#545F7A",
	flex: "0 0 0%",
	marginLeft: "25px"
};

let info = {
	justifyContent: "center",
	overflowY: "scroll"
};
let cardHeader = {
	display: "flex",
	flexDirection: "row",
	borderRadius: "4px",
	alignItems: "center",
	height: "100px"
};


let DashStyles = {
	diplay:"flex",
	backgroundColor: "white",
	height: "100%",
	minHeight: "100vh"
};



let listStyle = {
	marginTop: "70px",
	height: "560px",
	overflow: "scroll"
};

let rightPaneStyles = {
	backgroundColor: "#545F7A",
	fontFamily: "Rubik",
	fontSize: "24px",
	lineHeight: "28px",
	color: "#FFFFFF",
	minHeight: "100vh",
	height: "100%"
};


Instructor.propTypes = {
	instructor: PropTypes.object,
	handleChartType: PropTypes.func,
	students: PropTypes.array,
	handleFilter: PropTypes.func,
	//studentId: PropTypes.integer,
	filtered: PropTypes.string,
	chartType: PropTypes.string

};


export default Instructor;
