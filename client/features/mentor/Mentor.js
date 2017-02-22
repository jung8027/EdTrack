import React, {PropTypes} from 'react';
import AddMentor from './AddMentor';
import MentorTopic from '../mentorTopicList/MentorTopic.jsx';
import '../../styles/AddMentor.css';


const Mentor = (props) => {
	return (
		<div className="row">

				<div className="col s8" >
					<h1>Full List of Mentors</h1>
					<div id="DashStyles">
						<center>
						<div id="div-content">
							{(props.mentors) ? props.mentors.map((ele,indx)=>(
							<div className="card horizontal" key={indx}>

								<div onClick={()=> props.handleCardClick(ele.id)} className="card-image">
									<img src={ele.img_path || "/a4660052d5b6fee6192db0b5aeede812.png"} style={imgProfile} />
									<p className="header" id="mentorName">{ele.name}</p>
								</div>

								<div  className="card-stacked">
									<div className="card-content">
										{	props.activeRightPane1 == 'EMAIL' ?  <p className="header" id="email">{ele.email}</p> :
											props.activeRightPane == 'TOPICS1' ?
											<MentorTopic {...props} mentorId ={props.mentorId} /> : null
									  }

									</div>
								</div>

							</div>

							)) : null
						}
						</div>
					</center>
				</div>
			</div>

			<div className="col s4" id="rightPaneStyles">
				<div id="insides4">
					<center style={{width: "100%"}}>
						{props.activeRightPane == 'FORM' ?  <AddMentor /> :
							props.activeRightPane == 'TOPICS' ?
						<MentorTopic {...props} mentorId ={props.mentorId} /> : null
					  }
				  </center>
			  </div>
			</div>


		</div>
	);
};

Mentor.propTypes = {
	mentors: PropTypes.array,
};


let imgProfile ={
	height: "150px",
	width: "150px"
};

// let DashStyles = {
// 	backgroundColor: "white",
// 	height: "100%",
// 	overflow: "scroll",
// 	height:"650px"
// 	min-height: 100vh;
// 	height: 100%;
// };



export default Mentor;
