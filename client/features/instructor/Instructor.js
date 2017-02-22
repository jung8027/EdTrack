import React, {PropTypes} from "react";
import { browserHistory } from 'react-router';
import LineChart from '../common/LineChart';
import GradeContainer from '../grade/GradeContainer';

const Instructor = props => {
	console.log('grades in Instructor',props.grades);
	//filter grade less than 60
	let studentsGrades = [];
	const gradeFilter = item => item.grade <= 60 ? item.StudentId : null;

	//returns students ids from filtered grades
	const	getLowGrades = students =>{
		let studentsLowIds=[];
		students.map(item => studentsLowIds.push(item.Grades.map(gradeFilter))
		);
		return [].concat(...studentsLowIds).filter((val,pos,arr)=> val && arr.indexOf(val) == pos);
	};
	let lowGradeIds = getLowGrades(props.students);
	console.log('lowGradeIds',lowGradeIds);
	let lowGradeStudents = props.students.filter(student=> lowGradeIds.includes(student.id));
	console.log('lowGradeStudents',lowGradeStudents);
	console.log('props.filter',props.filtered);
	(props.filtered === "ALL") ? studentsGrades = props.students : (props.filtered === "BELOW60") ? studentsGrades = lowGradeStudents : null;
	console.log(studentsGrades);
	let filteredStudent = studentsGrades.filter(student=> student.id === props.studentId);
	console.log('filtered student Grades',filteredStudent[0]);
	return (
		<div className="row" style={{height: "100%"}}>
			{!props.instructor.name ?
				<p>Loading...</p> :
				<div >
					<div className="col s8" style={DashStyles}>
						<div>
							<img src={props.instructor.img_path || "/a4660052d5b6fee6192db0b5aeede812.png"}/>
							<p>{props.instructor.name}</p>
							<p>{props.instructor.email}</p>
						</div>
						<center>
							{
								<div>
									{props.infoSection === "CLASS" ?
										<div>
											<LineChart grades={props.grades}
													   chartType={props.chartType}
													   handleChartType={props.handleChartType}
											/>
											<GradeContainer studentId={props.studentId}/>
										</div>
										: props.infoSection === "STUDENT" ?
										<div style={{backgroundColor:"green"}}>
											<LineChart grades={filteredStudent[0].Grades}
													   chartType={props.chartType}
													   handleChartType={props.handleChartType}
											/>
											<GradeContainer studentId={props.studentId}/>
										</div>: null
									}

								</div>
							}
						</center>
					</div>
					<div className="col s4" style={rightPaneStyles}>
						<center style={{width: "100%"}}>
							<button className="btn waves-effect waves-light" id="filterBtn" type="button" onClick={props.handleFilter}>Filter Grades
								<i className="material-icons right">send</i>
							</button>
							<ul style={listStyle}>
								{!studentsGrades ?
									<div>Loading list of students...</div>
									:

									studentsGrades.map((student, indx) =>
										(
											<div key={indx} className="col s12 m12">

												<div className="card horizontal">
													<div onClick={()=> props.handleInfo(student.id)} className="card-image" style={cardHeader}>
														<img style={cardImg} src={student.img_path || "/a4660052d5b6fee6192db0b5aeede812.png"}/>
														<h2 className="header" style={cardTitle}>{student.name}</h2>
													</div>
													{
														props.activeStudentCard === 'GRADES' ?
															(<div onClick={props.handleCardClick} style={cardContent} className="card-stacked">
																<div className="card-content">
																	<ul>
																		{student.Grades.map((grade, i) => <li key={i}>
																			<strong>{grade.type}</strong>: {grade.grade}
																		</li>)}
																	</ul>
																</div>
															</div>)
															: props.activeStudentCard === 'TOPICS' ?
															(<div onClick={props.handleCardClick} style={cardContentTopic} className="card-stacked">
																<div className="card-content">
																	<ul>
																		{student.Topics.map((topic, i) => <li key={i}>
																			<strong>{topic.name}</strong>
																		</li>)}
																	</ul>
																</div>
															</div>)
															: null
													}
												</div>
											</div>
										)
									)
								}
							</ul>
							<br/>
							<button className="btn waves-effect waves-light" id="btnMentors" type="button" onClick={()=>browserHistory.push('/mentor')}>Mentors
								<i className="material-icons right">send</i>
							</button>
							<button className="btn waves-effect waves-light" id="btnMatch" type="button" onClick={()=>browserHistory.push('/mentor/1')}>Match
								<i className="material-icons right">send</i>
							</button>
						</center>
					</div>
				</div>
			}
		</div>
	);
};
let cardImg = {
	height: "80px",
	width: "auto",
	backgroundColor: "#545F7A",
	borderRadius: "50%"
};

let cardTitle = {
	color: "#545F7A",
	flex:"2"
};


let cardHeader = {
	display: "flex"
};


let DashStyles = {
	backgroundColor: "white",
	height: "100%",
	minHeight: "100vh"
};

let cardContent = {
	fontColor: "#545F7A",
	backgroundColor: "#3F485D",
	width: "100%",
	height: "175px"
};


let cardContentTopic = {
	fontColor: "#545F7A",
	color: "rgb(221, 19, 121)",
	backgroundColor: "#3F485D",
	width: "100%",
	height: "175px"
};

let listStyle = {
	marginTop: "70px",
	height: "560px",
	overflow: "auto"
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
	handleCardClick: PropTypes.func,
	handleChartType: PropTypes.func,
	students: PropTypes.array,
	handleFilter: PropTypes.func,
	studentId: PropTypes.integer,
	filtered: PropTypes.string,
	chartType: PropTypes.string

};


export default Instructor;
