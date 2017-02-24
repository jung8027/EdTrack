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
			studentId: 1,
			chartType: "BAR",
			matchConfirm: "CONFIRM",
			matchState: null
		};
		this.props.fetchInstructor(this.props.params.id);
		this.props.fetchStudents();
		this.handleMatch= this.handleMatch.bind(this);
		this.handleInfo = this.handleInfo.bind(this);
		this.handleFilter=this.handleFilter.bind(this);
		this.handleClassView = this.handleClassView.bind(this);
		this.handleLineChart= this.handleLineChart.bind(this);
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
	handleLineChart(e){
		e.preventDefault();
		let activeChart = this.state.chartType;
		let newActiveChart = 'LINE';

		this.setState({
			chartType: newActiveChart
		});
		console.log('new active chart',newActiveChart)
	}
	handleInfo(id){
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
	handleClassView(e){
		e.preventDefault();
		let classSection = 'CLASS';
		this.setState({
			infoSection: classSection,
			studentId: null,
			chartType: "BAR"

		});
	}
	handleFilter(e){

		e.preventDefault();
		$(".material-icons").removeClass("hidden");
		let filtered = this.state.filtered;
		let newFilter = filtered === 'ALL' ? 'BELOW60' : 'ALL';
		this.setState({
			filtered: newFilter
		});
		// let button = $('#filterBtn');
		// console.log('button value',button.val());
		// button.text( filtered === 'ALL' ? "All" : "Need Help");

	}
	render(){
		return (

			<Instructor
				{...this.props}
				activeStudentCard={this.state.activeStudentCard}
				handleFilter={this.handleFilter}
				filtered = {this.state.filtered}
				handleInfo = {this.handleInfo}
				infoSection = {this.state.infoSection}
				studentId ={this.state.studentId}
				handleLineChart = {this.handleLineChart}
				chartType = {this.state.chartType}
				handleClassView = {this.handleClassView}
				matchConfirm = {this.state.matchConfirm}
				matchState = {this.state.matchState}
				handleMatch={this.handleMatch}

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
