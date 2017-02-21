import React, {Component, PropTypes} from 'react';
import 'jquery-ui';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
const debug  = require('debug')('grade');

import Grade from './Grade';
import {fetchGrade, fetchAllGrades} from "./gradeActions";

class GradeContainer extends Component{
	constructor(props, context){
		super(props, context);
		this.state= {
			view: "instructor"
		};

		this.props.fetchAllGrades();
		console.log('grade container props', props);
	}
	render(){
		return (
			<Grade {...this.props} students={this.props.students} studentId={this.props.studentId} />
		);
	}

}

GradeContainer.propTypes = {
	grade: PropTypes.array,
	fetchGrade: PropTypes.func,
	fetchAllGrades: PropTypes.func,
};

const mapStateToProps= (state,ownProps)=>{
	console.log("state.gradeReducer:", state.gradeReducer);
	return {
		grade: state.gradeReducer
	};
};

const mapDispatchToProps=(dispatch)=>(
	bindActionCreators({ fetchAllGrades, fetchGrade }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(GradeContainer);

