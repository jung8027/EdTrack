import React, {PropTypes} from 'react';


const Topic = (props) => {
	return (
		<div>
			<h1>Topic</h1>
			{
				(props.topics) ? props.topics.map((topic, indx) => (
					<div key={indx}>
						<input type="checkbox" id={topic.id} value={topic.id} onChange={props.logger}/>
						<label htmlFor={topic.id}><h4>{topic.name}</h4></label>

					</div>
				)) : <p>loading...</p>
			}
			<input type="button" value="Add Topics" onClick={props.handleClick}/>
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

Topic.propTypes = {
	handleClick: PropTypes.func,
	logger: PropTypes.func,
	topics: PropTypes.array,
	selected: PropTypes.array
};
export default Topic;
