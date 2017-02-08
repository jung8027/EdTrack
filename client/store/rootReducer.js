import {combineReducers} from 'redux';
import mentorReducer from '../features/mentor/MentorReducer';
import studentReducer from '../features/student/studentReducer';
import topicReducer from '../features/topic/TopicReducer';
import gradeReducer from '../features/grade/gradeReducer';

const rootReducer = {
	mentorReducer,
	studentReducer,
	topicReducer,
	gradeReducer
};

const reducer = combineReducers(rootReducer);

export default reducer;
