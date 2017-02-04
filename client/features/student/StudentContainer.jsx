//This component handles the Home template
import React, {Component, PropTypes} from 'react';
import 'jquery-ui';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as studentActions from './studentActions';
const debug  = require('debug')('student');
import Student from './Student';
// import onStudentsEnter from '../../routes/route_data';


class StudentContainer extends Component{
	constructor(props, context){
		super(props, context);
		console.log('student container props',this.props);
	}
}

StudentContainer.propTypes = {
	actions : PropTypes.object.isRequired,
	student: PropTypes.object,
	fetchStudent: PropTypes.func
};

const mapStateToProps= (state,ownProps)=>{
	return {
		student: state.student
	};
};
debugger
const mapDispatchToProps=(dispatch)=>({
	actions: bindActionCreators({ studentActions }, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Student);

