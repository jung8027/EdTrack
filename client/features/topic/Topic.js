import React, {PropTypes} from 'react';

const Topic = (props) => {
	$(".topicBtn").click(function () {
		$(this).css({"background-color": "white", "color": "#545F7A"});
	});
	return (
		<div style={{"backgroundColor": "#545F7A"}}>
			{
				props.active === 'TOPICS' ?
				(<div>

					<h1>Need help?</h1>
					<center><h2 style={titleStyle}>Pick 3 topics from this unit and your instructor will pair you with a
						mentor:</h2></center>
					<center><div style={{height:"400px"}}>

						<ul>
							{
								(props.topics) ? props.topics.map((topic, indx) => (
									<li key={indx}>
										<input style={TopicsBtn} className="topicBtn" type="button" id={topic.id} name={topic.id} value={topic.name} onClick={props.logger}/>
									</li>
								)) : <p>loading...</p>
							}
						</ul>
					</div>
					</center>
					<br/>
					<input className="btn waves-effect waves-light" id="btnMentor" type="button" value="Find Mentor" onClick={props.handleClick} />
				</div>)
				: props.active === 'SELECTED' ?
				(<div >
					<h1>Get help!</h1>
					<center><h2 style={titleStyle}>with these topics you selected:</h2></center>
					<center>
						<div style={{height:"400px"}}>
						<center><ul>
							{
								props.selected ?
									props.topics.filter(topic => props.selected.includes(topic.id))
										.map((topic, indx) => <li key={indx}>
											<input style={selectedTopicsBtn} className="topicBtn" type="button" id={topic.id} name={topic.id} value={topic.name}/>
										</li>)
									:
									null
							}
						</ul>
						</center>
						</div>
					</center>
					<br/>
					<button className="btn waves-effect waves-light" id="btnsubmit" type="button" onClick={props.handleSubmit}>Submit
						<i className="material-icons right">send</i>
					</button>
				</div>) : null
			}

		</div>
	);
};

let TopicsBtn = {
	width: "auto",
	paddingLeft: "5px",
	paddingRight: "5px",
	height: "35px",
	backgroundColor: "#545F7A",
	border: "1px solid #FFFFFF",
	borderRadius: "100px",
	color: "#FFFFFF"
};


let selectedTopicsBtn = {
	width: "auto",
	paddingLeft: "5px",
	paddingRight: "5px",
	height: "35px",
	border: "1px solid #FFFFFF",
	borderRadius: "100px",
	marginLeft: "100px",
	backgroundColor: "white",
	color: "#545F7A",
	marginBottom: "2px"
};


let titleStyle = {

	fontFamily: "Rubik",
	fontSize: "24px",
	color: "#FFFFFF",
	lineHeight: "28px"

};

Topic.propTypes = {
	handleClick: PropTypes.func,
	logger: PropTypes.func,
	topics: PropTypes.array,
	selected: PropTypes.array,
	active: PropTypes.string,
	handleSubmit: PropTypes.func
};

export default Topic;
