import React, {PropTypes} from 'react';


const Topic = (props) => {
	return (
		<div>
			<div style={topics}>
				<h1>Need help?</h1>
				<center><h2 style={titleStyle}>Pick 3 topics from this unit and your instructor will pair you with a
					mentor:</h2></center>
				<ul className="items" style={listStyle}>
					{
						(props.topics) ? props.topics.map((topic, indx) => (
							<li style={item}  key={indx}>
								<input style={TopicsBtn} type="button" id={topic.id} name={topic.id} value={topic.name} onClick={props.logger} />
							</li>
						)) : <p>loading...</p>
					}
				</ul>
			</div>
			<br/>
			<button className="btn waves-effect waves-light" type="button" onClick={props.handleClick}>Find Mentor
				<i className="material-icons right">send</i>
			</button>

			<ul>
				{
					props.selected ?
						props.topics.filter(topic => props.selected.includes(topic.id))
							.map((topic, indx) => <li key={indx}><strong>{topic.name}</strong></li>)
						:
						null
				}
			</ul>
		</div>
	);
};

let TopicsBtn = {
	width: "150px",
	height: "35px",
	backgroundColor: "#545F7A",
	border: "1px solid #FFFFFF",
	borderRadius: "100px",
	marginLeft: "100px",
	color: "#FFFFFF"
};

let topics = {
	marginLeft: "64px",
	marginBottom: "100px"

};

let item = {
	flex: "50%"

};
let listStyle = {
	display: "flex",
	flexWrap: "wrap",
	width: "100px",
	height: "250px"

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
	selected: PropTypes.array
};

export default Topic;
