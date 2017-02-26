import React, { Component , PropTypes} from 'react';
import { VictoryBar ,VictoryLine, VictoryChart,VictoryTooltip, VictoryGroup,VictoryVoronoiTooltip} from 'victory';

const LineChart = props => {
		console.log('chart props',props);
		return (
			<div>
				<div className="chart" style={graph}>
				<VictoryChart

					// domainPadding will add space to each side of VictoryBar to
					// prevent it from overlapping the axis
					domainPadding={30}
				>
					{props.chartType === "LINE" ?
						<VictoryLine
							labelComponent={<VictoryTooltip/>}
							data={
								props.grades.map((grades,index) => ({type: grades.type, grade: grades.grade}))
							}
							domain={{y: [0, 100]}}
							x="type"
							y="grade"
							style={{
								labels: {fontSize: 12},
								parent: {border: "4px solid #ccc"},
								width: "60%"
							}}
						/>
						:
						<VictoryBar
							data={
								props.grades.map(grades => ({type: grades.type, grade: grades.grade}))
							}
							domain={{y: [0, 100]}}
							x="type"
							y="grade"
							style={{
								data: {fill: (d) => d.y > 60 ? "#1ABC9C" : "#DD1379"},
								labels: {fontSize: 12},
								parent: {border: "4px solid #ccc"},
								width: "60%"
							}}
						/>
					}
				</VictoryChart>
			</div>
			</div>
		);
	};

LineChart.propTypes = {
	handleChartType: PropTypes.func,
	grades: PropTypes.array,
	chartType: PropTypes.string

};

let graph = {
	height: "497px",
  // width: "80%",
  userSelect: "none",
  marginTop: "-40px",
  width: "672px",

}
export default LineChart;
