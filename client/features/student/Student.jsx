//This component handles the Home template
import React, {PropTypes} from 'react';
import LineChart from '../common/LineChart';
import TopicContainer from '../topic/TopicContainer';
import GradeContainer from '../grade/GradeContainer';

const Student = (props)=>{
		console.log('student component props',props.student);
		return (
			<div className="row">
				{!props.student.name ?
					<p>Loading...</p> :
					<div>
						<div className="col s7" style={DashStyles}>
							<p>name: {props.student.name}</p>
							<p>email: {props.student.email}</p>
							<p>address: {props.student.address}</p>
							<LineChart grades={props.student.Grades}/>
							<ul>Grades:
								{props.student.Grades.map((grade,indx)=>
									(<li key={indx}>
										{grade.type}:
										{grade.grade}

									</li>))}
							</ul>
							<GradeContainer {...props}/>
						</div>

						<div className="col s4" style={TopicStyles}>
								<TopicContainer {...props} />
						</div>
					</div>
				}
			</div>
		);

};

let DashStyles = {
 	backgroundColor: "white",
	 height:"1024px",
	 marginLeft: "50px"
 };

let TopicStyles = {
	backgroundColor: "transparent",
	height: "1024px",
	fontFamily: "Rubik",
	fontSize: "24px",
	lineHeight: "28px",
	color: "#FFFFFF"
};

export default Student;
