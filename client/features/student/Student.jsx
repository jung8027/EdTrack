//This component handles the Home template
import React, {PropTypes} from 'react';
import LineChart from '../common/LineChart';
import TopicContainer from '../topic/TopicContainer';
import GradeContainer from '../grade/GradeContainer';

const Student = (props) => {
	console.log('student component props', props.student);
	return (
		<div className="row">
			{!props.student.name ?
				<p>Loading...</p> :
				<div style={{backgroundColor:"#545F7A"}}>
					<div className="col s7" style={DashStyles}>
						<div style={{marginLeft: "-750px"}}>
						<img src={props.student.img_path||"/a4660052d5b6fee6192db0b5aeede812.png"}/>
						<p>{props.student.name}</p>
						<p>{props.student.email}</p>
						</div>
						<center>
							<LineChart grades={props.student.Grades}/>
							<GradeContainer studentId={props.student.id}/>
						</center>
					</div>
					<div className="col s4" style={TopicStyles}>
						<TopicContainer {...props}/>
					</div>
				</div>
			}
		</div>
	);

};

let DashStyles = {
	backgroundColor: "white",
	height: "1024px",
	marginLeft: "50px"
};

let TopicStyles = {
	backgroundColor: "#545F7A",
	height: "1024px",
	fontFamily: "Rubik",
	fontSize: "24px",
	lineHeight: "28px",
	color: "#FFFFFF"
};

export default Student;
