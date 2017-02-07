import React, {PropTypes} from 'react';


const Grade = (props)=>{
		// props has no 'grade' key, props.grade = undefined
		console.log('grade component props',props);
		return (
			<div>
				<h1>Grade Info</h1>
				{!props.grade.data ?
					<p>Loading...</p> :
					<ul>
						<ul>Grades:
							{props.grade.data.grade.map((grade,indx)=>
								(<li key={indx}>
									{grade.type}:
									{grade.grade}

								</li>))}
						</ul>
					</ul>
				}
			</div>
		);

};

export default Grade;
