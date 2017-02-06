//This component handles the Home template
import React, {Component, PropTypes} from 'react';
import 'jquery-ui';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchStudent} from './studentActions';
const debug  = require('debug')('student');
import Student from './Student';


class StudentContainer extends Component{
	constructor(props, context){
		super(props, context);
		console.log('student container props',props);
	}
}

StudentContainer.propTypes = {
	actions : PropTypes.object.isRequired,
	student: PropTypes.object,
	fetchStudent: PropTypes.func
};

const mapStateToProps= (state,ownProps)=>{
	return {
		student: state.studentReducer
	};
};

const mapDispatchToProps=(dispatch)=>({
	actions: bindActionCreators({ fetchStudent }, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Student);
