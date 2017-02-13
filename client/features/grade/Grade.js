import React, {PropTypes} from 'react';
import LineChart from '../common/LineChart';

const Grade = (props)=>{
		console.log('grade component props', props.grade);

		return (
			<div>
				<h1>Grade Info</h1>
				{!props.grade ?
					<p>Loading...</p> :
					<div>
					<ul>
							<div>
								<h3>Hey Student {props.grade.StudentId}, </h3>
								<h4> You got a <strong>{props.grade.grade}</strong> on your <stong>{props.grade.type}</stong>
								</h4>
							</div>
						</ul>
						<LineChart grade ={props.grade} />
					</div>
				}

			</div>
		);
};

export default Grade;
