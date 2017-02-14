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

		console.log('grade container props', props);
	}
	render(){
		return (
			<Grade {...this.props} />
		);
	}

}

GradeContainer.propTypes = {
	actions : PropTypes.object.isRequired,
	grade: PropTypes.object,
	fetchGrade: PropTypes.func,
	fetchAllGrades: PropTypes.func,
};

const mapStateToProps= (state,ownProps)=>{
	// debugger;
	console.log("state.gradeReducer:", state.gradeReducer);
	return {
		grade: state.gradeReducer
	};
};

const mapDispatchToProps=(dispatch)=>({
	// actions: bindActionCreators({ fetchGrade }, dispatch)
	actions: bindActionCreators({ fetchAllGrades }, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(GradeContainer);

