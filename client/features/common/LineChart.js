import React, { Component } from 'react';
import { VictoryBar , VictoryChart} from 'victory';

const LineChart = props => {
		console.log('chart props',props);
		return (
			<VictoryChart
				width={250}
				height={250}
				VictoryChart
				// domainPadding will add space to each side of VictoryBar to
				// prevent it from overlapping the axis
				domainPadding={30}
			>
				<VictoryBar
					data={[
						{type: props.grades[0].type, grade: props.grades[0].grade},
						{type: props.grades[1].type, grade: props.grades[1].grade},
						{type: props.grades[2].type, grade: props.grades[2].grade}
					]}
					domain={{y: [0, 100]}}
					scale={{y: "linear"}}
					x="type"
					y="grade"
					style={{
						data: { fill:(d) => d.y > 60 ? "#1ABC9C" : "#DD1379" },
						labels: {fontSize: 12},
						parent: {border: "4px solid #ccc"}
					}}
				/>
			</VictoryChart>
		);
	};


export default LineChart;
