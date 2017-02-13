//This component handles the Home template
import React, {PropTypes} from 'react';


const Student = (props)=>{
		console.log('studentTopic component props',props.studentTopic);
		return (
			<div>
				<h1>Student Topic List</h1>
				{ props.studentTopic.name ?
					<div>
						<p><strong>{props.studentTopic.name}</strong> has chosen the below topic list:</p>
						<ul>
							{
								props.studentTopic.Topics.map((topic,indx)=> <li key={indx}>{topic.name}</li>)
							}
						</ul>
					</div>
					:
					<p>Loading topic list...</p>
				}
			</div>
		);

};

export default Student;
