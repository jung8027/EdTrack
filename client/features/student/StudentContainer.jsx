//This component handles the Home template
import React, {Component, PropTypes} from 'react';
import 'jquery-ui';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchStudent} from './studentActions';
const debug = require('debug')('student');
import Student from './Student';

class StudentContainer extends Component {
	constructor(props, context) {
		super(props, context);
		this.props.fetchStudent(this.props.params.id);
		console.log('student container props', props);

	}
	render() {
		return (
			<Student {...this.props} />
		)
	}
}


StudentContainer.propTypes = {
	student: PropTypes.object,
	fetchStudent: PropTypes.func
};

const mapStateToProps = (state) => {
	return {
		student: state.studentReducer.student
	};
};

const mapDispatchToProps = (dispatch) => (
	bindActionCreators({fetchStudent}, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(StudentContainer);

