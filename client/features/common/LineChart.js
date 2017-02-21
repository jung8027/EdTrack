import React, { Component , PropTypes} from 'react';
import { VictoryBar ,VictoryLine, VictoryChart,VictoryTooltip, VictoryGroup,VictoryVoronoiTooltip} from 'victory';

const LineChart = props => {
		console.log('chart props',props.chartType);
		return (
			<div>
				<button onClick={props.handleChartType} >Change Chart</button>
				<div className="chart" style={{width:"60%"}}>

				<VictoryChart

					// domainPadding will add space to each side of VictoryBar to
					// prevent it from overlapping the axis
					domainPadding={30}
				>
					{props.chartType === "BAR" ?
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
						: props.chartType === "LINE" ?
							<VictoryLine
								labelComponent={<VictoryTooltip/>}
								data={
									props.grades.map(grades => ({type: grades.type, grade: grades.grade}))
								}
								domain={{y: [0, 100]}}
								x="type"
								y="grade"
								style={{
									stroke: "red",
									labels: {fontSize: 12},
									parent: {border: "4px solid #ccc"},
									width: "60%"
								}}
							/>
							:
							null
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
export default LineChart;
