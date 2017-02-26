import React, { Component , PropTypes} from 'react';
import { VictoryBar ,VictoryLine, VictoryChart,VictoryTooltip,VictoryGroup,VictoryVoronoiTooltip} from 'victory';
import {getAvgsByStudentId, getAllAvgs} from './GradesMethods';

const LineChart = props => {

	let gradesArray = props.grades;
	//get averages based on type of grade for either one student or all students
	let quizzesAvg = props.studentId && props.grades ? getAvgsByStudentId(gradesArray, 'quiz',props.studentId): getAllAvgs(gradesArray, 'quiz');
	let assignmentAvg = props.studentId && props.grades  ? getAvgsByStudentId(gradesArray, 'assignment',props.studentId): getAllAvgs(gradesArray, 'assignment');
	let finalAvg = props.studentId && props.grades ? getAvgsByStudentId(gradesArray, 'final',props.studentId): getAllAvgs(gradesArray, 'final');
	let midtermAvg = props.studentId && props.grades ? getAvgsByStudentId(gradesArray, 'midterm',props.studentId): getAllAvgs(gradesArray, 'midterm');
	//filter all assignments
	let allAssignments = gradesArray.filter(grade=> grade.type==="assignment").map((assignment,i)=> ({type: i+1 ,grade: assignment.grade}));
	//filter all quizzes
	let allQuizzes = gradesArray.filter(grade=> grade.type==="quiz").map((quiz,i)=> ({type: i+1 ,grade: quiz.grade}));
	//data that will be rendered in the graph
	let allData = [
		{type: 'quiz', grade: quizzesAvg,label:'Average Quizzes'},
		{type: 'assignment', grade: assignmentAvg,label:'Average Assignments'},
		{type: 'midterm', grade: midtermAvg,label:'Midterm'},
		{type: 'final', grade: finalAvg,label:'Final'}
	];
	return (
			<div>
				<div className="chart" style={{width:"60%"}}>
				<VictoryChart

					// domainPadding will add space to each side of VictoryBar to
					// prevent it from overlapping the axis
					domainPadding={30}
				>
					{props.chartType === "LINE" ?
						(props.chartGradeType === "ASSIGNMENT" && props.studentId?

						<VictoryLine
							data={
								allAssignments ? allAssignments : {type: 'no data', grade: 0}
							}
							domain={{y: [0, 100]}}
							x= "type"
							y="grade"
							style={{
								labels: {fontSize: 12},
								parent: {border: "8px solid #ccc"},
								width: "80%"
							}}
						/>
							: props.chartGradeType === "QUIZ" ?
							<VictoryLine
								data={
									allQuizzes? allQuizzes : {type: 'no data', grade: 0}
								}
								domain={{y: [0, 100]}}
								x="type"
								y="grade"
								style={{
									labels: {fontSize: 12},
									parent: {border: "8px solid #ccc"},
									width: "60%"
								}}
							/>:
							<VictoryLine
								data={
									allAssignments ? allAssignments : {type: 'no data', grade: 0}
								}
								domain={{y: [0, 100]}}
								x= "type"
								y="grade"
								style={{
									labels: {fontSize: 12},
									parent: {border: "8px solid #ccc"},
									width: "60%"
								}}
							/>
						)
						:
						<VictoryBar
							labelComponent={<VictoryTooltip/>}
							data= {
								allData? allData.map(grades=> grades) : {type: 'no data', grade: 0}
							}
							domain={{y: [0, 100]}}
							x="type"
							y="grade"
							style={{
								data: {fill: (d) => d.y >= 60 ? "#1ABC9C" : "#DD1379"},
								labels: {fontSize: 12},
								parent: {border: "10px solid #ccc"},
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
	chartType: PropTypes.string,
	chartGradeType: PropTypes.string
};
export default LineChart;
