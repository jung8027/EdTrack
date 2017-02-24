import React, {PropTypes} from 'react';
import AddMentor from './AddMentor';
import MentorTopic from '../mentorTopicList/MentorTopic.jsx';

import Header from '../common/Header.js';
import '../../styles/AddMentor.css';
import $ from 'jquery';


const Mentors = (props) => {
	const mentors = props.mentors;

	return (
		<div className="row">
				<div className="col s8" >
					<div style={heading}>
						<div style={{width:"100px",textAlign:"center"}}>
							<img src={"/a4660052d5b6fee6192db0b5aeede812.png"} id="instructorImage"/>
							<Header  id="header1"/>
						</div>
					</div>


					<div>
						<h1 id="mentorTittle">Mentors</h1>
					</div>
					<div id="DashStyles">
						<div id="div-content"className="container">
							<ul>
								{(props.mentors) ? props.mentors.map((ele,indx)=>(
								<li key={indx}>
								<div id ={"mentorCard" + ele.id} className="card horizontal" onClick={()=> props.handleCardClick(ele.id)}  >
									<div className="card-image">
										<img src={ele.img_path || "/a4660052d5b6fee6192db0b5aeede812.png"} id="imgProfile" />
										<p className="header" id="mentorName">
											{ele.name}</p>
									</div>
								</div>
								</li>
								)) : null
								}
							</ul>
						</div>
				</div>
			</div>

			<div className="col s4" id="rightPaneStyles">
				<div id="insides4">
					<center style={{width: "100%"}}>
						{props.activeRightPane == 'FORM' ?  <AddMentor /> :
							props.activeRightPane == 'TOPICS' ?
						<MentorTopic {...props} mentorId ={props.selectedMentorId} /> : null
					  }
				  </center>
			  </div>
			</div>
		</div>
	);
};

Mentors.propTypes = {
	mentors: PropTypes.array,
};

let heading = {
	paddingLeft:"20px",
	textAlign: "left",
	paddingBottom: "55px"
};


export default Mentors;
