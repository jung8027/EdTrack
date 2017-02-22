//This component handles the Home template
import React, {PropTypes} from 'react';
import LineChart from '../common/LineChart';
import TopicContainer from '../topic/TopicContainer';
import GradeContainer from '../grade/GradeContainer';

const Student = (props) => {
	console.log('student grades component props', props.student.Grades);
	return (
		<div className="row">
			{!props.student.name ?
				<p>Loading...</p> :
				<div>
					<div className="col s8" style={DashStyles}>
						<div style={heading}>
							<div style={{width:"100px",textAlign:"center"}}>
								<img src={props.student.img_path||"/a4660052d5b6fee6192db0b5aeede812.png"}/>
								<p>{props.student.name}</p>
								<p>{props.student.email}</p>
							</div>
						</div>
						 <center>
							<LineChart grades={props.student.Grades}/>
							<GradeContainer studentId={props.student.id}/>
						</center>
					</div>
					<div className="col s4" style={rightPaneStyles}>
							<TopicContainer {...props}/>
					</div>
				</div>
			}
		</div>
	);

};

let heading = {
	paddingLeft:"20px",
	textAlign: "left"
};

let DashStyles = {
	backgroundColor: "white",
	height: "100%",
	minHeight: "100vh"
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
export default Student;
