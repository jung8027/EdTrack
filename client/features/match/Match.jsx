import React, {PropTypes} from "react";
import { browserHistory } from 'react-router';



const Match = (props) => {
	const match = {
		"id1": {
			mentorName: "Justin",
			mentorEmail: "Justin@gmail.com",
			topics: "DSA",
			students: "Iliass, Jung, Luis, Quan",
		},
		"id2": {
			mentorName: "Lev",
			mentorEmail: "Justin@gmail.com",
			topics: "redux",
			students: "Iliass, Jung, Luis, Quan",
		},
		"id3": {
			mentorName: "Paul",
			mentorEmail: "Justin@gmail.com",
			topics: "react",
			students: "Luis, Quan",
		},
		"id4": {
			mentorName: "Kenny",
			mentorEmail: "Justin@gmail.com",
			topics: "sequelize",
			students: "Iliass, Luis, Quan",
		},

	};

	// const match = [
	// 	{
	// 		mentorName: "Justin",
	// 		mentorEmail: "Justin@gmail.com",
	// 		topics: "DSA",
	// 		students: "Iliass, Jung, Luis, Quan",
	// 	},
	// 	{
	// 		mentorName: "Lev",
	// 		mentorEmail: "Justin@gmail.com",
	// 		topics: "redux",
	// 		students: "Iliass, Jung, Luis, Quan",
	// 	},
	// 	{
	// 		mentorName: "Paul",
	// 		mentorEmail: "Justin@gmail.com",
	// 		topics: "react",
	// 		students: "Luis, Quan",
	// 	},
	// 	{
	// 		mentorName: "Kenny",
	// 		mentorEmail: "Justin@gmail.com",
	// 		topics: "sequelize",
	// 		students: "Iliass, Luis, Quan",
	// 	},

	// ];

	return (
		<div className="row" style={{height: "100%"}}>

				<div >
					<div className="col s8" style={DashStyles}>
							<center>
								<div style={cardStyle}>
									<p>{match.id1.mentorName}</p>
									<p>{match.id1.mentorEmail}</p>
									<p>Mentor-Students matches go here</p>
								</div>
							</center>

					</div>



					<div className="col s4" style={rightPaneStyles}>
						<center style={{width: "100%"}}>
							<h1>Success !!!</h1>
						</center>
					</div>
				</div>

		</div>
	);
};


let cardStyle = {
	width: "368px",
	height: "119px",
	backgroundColor: "#3F485D",
	borderRadius: "4px",
	fontFamily: "Rubik",
	fontSize: "14px",
	lineHeight: "17px",
	color: "#FFFFFF",
}

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


// Instructor.propTypes = {
// 	instructor: PropTypes.object,
// 	handleCardClick: PropTypes.func,
// 	handleChartType: PropTypes.func,
// 	students: PropTypes.array,
// 	handleFilter: PropTypes.func,
// 	studentId: PropTypes.integer,
// 	filtered: PropTypes.string,
// 	chartType: PropTypes.string

// };



export default Match;
