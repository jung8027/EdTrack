import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
const debug  = require('debug')('instructor');
import $ from 'jquery';
import {browserHistory} from 'react-router';
import Instructor from './Instructor';
import { fetchInstructor } from "./InstructorActions";
import { fetchStudents } from '../student/studentActions';
import { fetchAllGrades } from '../grade/gradeActions';
import Match from '../match/Match.jsx'

class InstructorContainer extends Component{
	constructor( props ){
		super( props );
		this.state ={
			activeStudentCard: "TOPICS",
			filtered: "ALL",
			infoSection: "CLASS",
			studentId: null,
			chartType: "BAR",
			chartGradeType: null,
			matchConfirm: "CONFIRM",
			matchState: null
		};
		this.props.fetchInstructor(this.props.params.id);
		this.props.fetchStudents();
		this.handleMatch= this.handleMatch.bind(this);
		this.handleStudentView = this.handleStudentView.bind(this);
		this.handleFilterNeed=this.handleFilterNeed.bind(this);
		this.handleFilterAll = this.handleFilterAll.bind(this);
		this.handleAllGrades = this.handleAllGrades.bind(this);
		this.handleLineAssignmentChart= this.handleLineAssignmentChart.bind(this);
		this.handleLineQuizChart= this.handleLineQuizChart.bind(this);
		this.handleClassView = this.handleClassView.bind(this);
	}
	handleMatch(e){
	e.preventDefault();
	let newActiveChart = 'MATCH';

	this.setState({
		matchState: newActiveChart
	});
	browserHistory.push(`/instructor/${this.props.instructor.id}/match`);
	console.log('new active chart',newActiveChart)
}
	handleLineAssignmentChart(e){
		e.preventDefault();
		let assignmentChart = this.state.chartGradeType;
		let type = 'ASSIGNMENT';
		this.setState({
			chartType:"LINE",
			chartGradeType: type
		});
		console.log('new active assignment chart',assignmentChart)
	}
	handleLineQuizChart(e){
		e.preventDefault();
		let chartGradeType = this.state.chartGradeType;
		let type = "QUIZ";
		this.setState({
			chartType: 'LINE',
			chartGradeType: type
		});
		console.log('new active chart',chartGradeType)
	}
	handleStudentView(id){
		let newInfoSection = 'STUDENT';
		this.setState({
			infoSection: newInfoSection
		});
		this.setState({
			studentId: id
		});
		console.log("studentId", this.state.studentId);
		$('.card').removeClass('highlight');
		$('#mentorCard' + id).addClass('highlight')
	}
	handleAllGrades(e){
		e.preventDefault();
		this.setState({
			studentId: 1,
			chartType: "BAR",
			chartGradeType: null

		});
	}
	handleClassView(e){
		e.preventDefault();
		this.setState({
			infoSection: "CLASS",
			studentId: null
		});
	}
	handleFilterAll(e){
		e.preventDefault();
		this.setState({
			filtered: "ALL"
		});
	}
	handleFilterNeed(e){
		e.preventDefault();
		this.setState({
			filtered: "BELOW60"
		});
	}
	render(){
		return (

			<Instructor
				{...this.props}
				activeStudentCard={this.state.activeStudentCard}
				handleFilterAll={this.handleFilterAll}
				handleFilterNeed={this.handleFilterNeed}
				filtered = {this.state.filtered}
				handleStudentView = {this.handleStudentView}
				infoSection = {this.state.infoSection}
				studentId ={this.state.studentId}
				handleLineQuizChart = {this.handleLineQuizChart}
				handleLineAssignmentChart = {this.handleLineAssignmentChart}
				chartType = {this.state.chartType}
				chartGradeType= {this.state.chartGradeType}
				handleAllGrades = {this.handleAllGrades}
				matchConfirm = {this.state.matchConfirm}
				matchState = {this.state.matchState}
				handleMatch={this.handleMatch}
				handleClassView ={this.handleClassView}

			/>
		);
	}
}


InstructorContainer.propTypes = {
	instructor: PropTypes.object,
	fetchInstructor: PropTypes.func,
	students: PropTypes.array,
	student : PropTypes.object,
	handleChartType: PropTypes.func
};

const mapStateToProps = state => ({
	instructor: state.instructorReducer,
	students: state.studentReducer.students,
	student: state.studentReducer.student,
	grades: state.gradeReducer
});

const mapDispatchToProps = dispatch => (
	bindActionCreators({ fetchInstructor, fetchStudents , fetchAllGrades }, dispatch)
);

export default connect( mapStateToProps, mapDispatchToProps )( InstructorContainer );
