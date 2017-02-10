//This component handles the Home template
import React, {Component, PropTypes} from 'react';
import 'jquery-ui';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchStudentTopic, addStudentTopic} from './StudentTopicActions';
import StudentTopic from './StudentTopic';

class StudentTopicContainer extends Component{
	constructor(props, context){
		super(props, context);
		console.log('student topic container props',props);
	}
	render(){
		return (
			<StudentTopic {...this.props} />
		)
	}

}

StudentTopicContainer.propTypes = {
	actions : PropTypes.object.isRequired,
	studentTopic: PropTypes.object,
	fetchStudentTopic: PropTypes.func
};

const mapStateToProps= (state,ownProps)=>{
	return {
		studentTopic: state.studentTopicReducer
	};
};

const mapDispatchToProps=(dispatch)=>({
	actions: bindActionCreators({ fetchStudentTopic, addStudentTopic }, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(StudentTopicContainer);

