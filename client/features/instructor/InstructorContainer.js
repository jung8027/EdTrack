import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
const debug  = require('debug')('instructor');
import $ from 'jquery';
import Instructor from './Instructor';
import { fetchInstructor } from "./InstructorActions";
import { fetchStudents } from '../student/studentActions';
import { fetchAllGrades } from '../grade/gradeActions';

class InstructorContainer extends Component{
	constructor( props ){
		super( props );
		this.state ={
			activeStudentCard: "GRADES",
			filtered: "ALL",
			infoSection: "CLASS",
			studentId: 1,
			chartType: "BAR",
			matchConfirm: "CONFIRM"
		};
		this.props.fetchInstructor(this.props.params.id);
		this.props.fetchStudents();
		this.props.fetchAllGrades();
		this.handleInfo = this.handleInfo.bind(this);
		this.handleCardClick= this.handleCardClick.bind(this);
		this.handleFilter=this.handleFilter.bind(this);
		this.handleChartType= this.handleChartType.bind(this);
		this.handleClassView = this.handleClassView.bind(this);

	}

	handleChartType(e){
		e.preventDefault();
		let activeChart = this.state.chartType;
		let newActiveChart = activeChart === 'BAR' ? 'LINE' : 'BAR';

		this.setState({
			chartType: newActiveChart
		});
		console.log('new active chart',newActiveChart)
	}

	handleCardClick(e) {
		e.preventDefault();
		let activeStudentCard = this.state.activeStudentCard;
		let newActiveCard = activeStudentCard === 'GRADES' ? 'TOPICS' : 'GRADES';

		this.setState({
			activeStudentCard: newActiveCard
		});
		console.log('newactive card state',newActiveCard)
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
	}
	handleClassView(e){
		e.preventDefault();
		let classSection = 'CLASS';
		this.setState({
			infoSection: classSection,
			studentId: null
		});
	}
	handleFilter(e){
		e.preventDefault();
		let filtered = this.state.filtered;
		let newFilter = filtered === 'ALL' ? 'BELOW60' : 'ALL';
		this.setState({
			filtered: newFilter
		});
		let button = $('#filterBtn');
		console.log('button value',button.val());
		button.text( filtered === 'ALL' ? "All" : "Need Help");
	}
	render(){
		return (
			<Instructor
				{...this.props}
				activeStudentCard={this.state.activeStudentCard}
				handleCardClick={this.handleCardClick}
				handleFilter={this.handleFilter}
				filtered = {this.state.filtered}
				handleInfo = {this.handleInfo}
				infoSection = {this.state.infoSection}
				studentId ={this.state.studentId}
				handleChartType = {this.handleChartType}
				chartType = {this.state.chartType}
				handleClassView = {this.handleClassView}
				matchConfirm = {this.state.matchConfirm}

			/>
		);
	}
}


InstructorContainer.propTypes = {
	instructor: PropTypes.object,
	fetchInstructor: PropTypes.func,
	students: PropTypes.array,
	student : PropTypes.object,
	handleCardClick: PropTypes.func,
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
