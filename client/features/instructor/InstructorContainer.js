import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
const debug  = require('debug')('instructor');

import Instructor from './Instructor';
import { fetchInstructor } from "./InstructorActions";

class InstructorContainer extends Component{
	constructor( props ){
		super( props );
		this.props.fetchInstructor();
	}

	render(){
		return (
			<Instructor {...this.props} />
		);
	}
}


InstructorContainer.propTypes = {
	actions: PropTypes.object.isRequired,
	instructor: PropTypes.object,
	fetchInstructor: PropTypes.func
};

const mapStateToProps = state => ({
	instructor: state.instructorReducer
});

const mapDispatchToProps = dispatch => ({
	actions: bindActionCreators({ fetchInstructor }, dispatch)
});

export default connect( mapStateToProps, mapDispatchToProps )( InstructorContainer )
