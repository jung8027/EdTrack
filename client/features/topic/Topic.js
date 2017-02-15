import React, {PropTypes} from 'react';


const Topic = (props) => {
	return (
		<div>
			<h1>Need help?</h1>
			<h2>Pick 3 topics from this unit and your instructor will pair you with a mentor:</h2>
			{
				(props.topics) ? props.topics.map((topic, indx) => (
					<div key={indx}>
						<input style={TopicsBtn} type="button" id={topic.id} value={topic.id} onClick={props.logger}/>
						<label htmlFor={topic.id}><h4>{topic.name}</h4></label>

					</div>
				)) : <p>loading...</p>
			}
			<button className="btn waves-effect waves-light" type="button" onClick={props.handleClick}>Submit
				<i className="material-icons right">send</i>
			</button>
			<br/>
			<h2><strong>Topics that you need help with are :</strong></h2>
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

let TopicsBtn ={
	width: "137px",
	height: "35px",
	backgroundColor: "#545F7A",
	border : "1px solid #FFFFFF",
	borderRadius: "100px"
};

Topic.propTypes = {
	handleClick: PropTypes.func,
	logger: PropTypes.func,
	topics: PropTypes.array,
	selected: PropTypes.array
};
export default Topic;
