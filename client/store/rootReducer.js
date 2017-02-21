import {combineReducers} from 'redux';
import mentorReducer from '../features/mentor/MentorReducer';
import studentReducer from '../features/student/studentReducer';
import topicReducer from '../features/topic/TopicReducer';
import gradeReducer from '../features/grade/gradeReducer';
import instructorReducer from '../features/instructor/InstructorReducer';


const rootReducer = {
	mentorReducer,
	studentReducer,
	topicReducer,
	gradeReducer,
	instructorReducer
};

const reducer = combineReducers(rootReducer);

export default reducer;
