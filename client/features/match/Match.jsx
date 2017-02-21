import React, {PropTypes} from "react";
import { browserHistory } from 'react-router';
import LineChart from '../common/LineChart';
import GradeContainer from '../grade/GradeContainer';


const Match = (props) => {
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
									<LineChart grades={filteredStudent[0].Grades}
											   chartType={props.chartType}
											   handleChartType={props.handleChartType}
									/>
									<GradeContainer studentId={props.studentId}/>
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
															(<div onClick={props.handleCardClick} style={cardContent} className="card-stacked">
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
	)
}
