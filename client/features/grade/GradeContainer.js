import React, {Component, PropTypes} from 'react';
import 'jquery-ui';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
const debug  = require('debug')('grade');

import Grade from './Grade';
import {fetchGrade} from "./gradeActions";

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
	fetchGrade: PropTypes.func
};

const mapStateToProps= (state,ownProps)=>{
	// debugger;
	console.log("state.gradeReducer:", state.gradeReducer);
	return {
		grade: state.gradeReducer
	};
};

const mapDispatchToProps=(dispatch)=>({
	actions: bindActionCreators({ fetchGrade }, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(GradeContainer);

