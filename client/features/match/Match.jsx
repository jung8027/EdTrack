import React, {PropTypes} from "react";
import { browserHistory } from 'react-router';



const Match = (props) => {
	// const match = {
	// 	"id1": {
	// 		mentorName: "Justin",
	// 		mentorEmail: "Justin@gmail.com",
	// 		topics: "DSA",
	// 		students: "Iliass, Jung, Luis, Quan",
	// 		img_path: "c805236406941d2ba6b9398291266281.png"
	// 	},
	// 	"id2": {
	// 		mentorName: "Lev",
	// 		mentorEmail: "Justin@gmail.com",
	// 		topics: "redux",
	// 		students: "Iliass, Jung, Luis, Quan",
	// 		img_path: "c805236406941d2ba6b9398291266281.png"
	// 	},
	// 	"id3": {
	// 		mentorName: "Paul",
	// 		mentorEmail: "Justin@gmail.com",
	// 		topics: "react",
	// 		students: "Luis, Quan",
	// 		img_path: "c805236406941d2ba6b9398291266281.png"

	// 	"id4": {
	// 		mentorName: "Kenny",
	// 		mentorEmail: "Justin@gmail.com",
	// 		topics: "sequelize",
	// 		students: "Iliass, Luis, Quan",
	// 		img_path: "c805236406941d2ba6b9398291266281.png"
	// 	},

	// };

	const match = [
		{
			mentorName: "Justin",
			mentorEmail: "Justin@gmail.com",
			topics: "DSA",
			students: "Iliass, Jung, Luis, Quan",
			img_path: "../../server/images/c805236406941d2ba6b9398291266281.png"
		},
		{
			mentorName: "Lev",
			mentorEmail: "Justin@gmail.com",
			topics: "redux",
			students: "Iliass, Jung, Luis, Quan",
			img_path: "../../server/images/c805236406941d2ba6b9398291266281.png"
		},
		{
			mentorName: "Paul",
			mentorEmail: "Justin@gmail.com",
			topics: "react",
			students: "Luis, Quan",
			img_path: "../../server/images/c805236406941d2ba6b9398291266281.png"
		},
		{
			mentorName: "Kenny",
			mentorEmail: "Justin@gmail.com",
			topics: "sequelize",
			students: "Iliass, Luis, Quan",
			img_path: "../../server/images/c805236406941d2ba6b9398291266281.png"
		},

	];

	return (
		<div className="row" style={{height: "100%"}}>

				<div >
					<div className="col s12" style={DashStyles}>
						<div>
							<h1>Please confirm the following emails: </h1>
						</div>

						{

							match.map( (mentor, i) => (
								<center>
									<div id ="mentorCard" className="card horizontal" key={i}>

										<div className="card-image">

											<img src="/a4660052d5b6fee6192db0b5aeede812.png" style={imgProfile} />
											<p className="header" id="mentorName">{mentor.mentorName}</p>
											<p className="header" id="mentorEmail">{mentor.mentorEmail}</p>

										</div>

										<div  className="card-stacked">
											<div className="card-content">
												<p className="header" id="email">{mentor.students}
												</p>
											</div>
										</div>

									</div>
								</center>
							))
						}

						<button className="btn waves-effect waves-light" id="btnMatch" type="button" onClick={()=>browserHistory.push(`/instructor/1`)} >Dashboard
								<i className="material-icons right">send</i>
						</button>

						<button className="btn waves-effect waves-light" id="btnMatch" type="button" onClick={()=>browserHistory.push(`/email`)} >Send Email
								<i className="material-icons right">send</i>
						</button>

					</div>



{/*					<div className="col s4" style={rightPaneStyles}>
						<center style={{width: "100%"}}>
							<h1>Success !!!</h1>
						</center>
					</div>*/}
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
	marginTop: "auto",
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

let imgProfile ={
	height: "150px",
	width: "150px",
	float: "left",
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
