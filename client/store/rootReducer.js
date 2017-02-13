import {combineReducers} from 'redux';
import mentorReducer from '../features/mentor/MentorReducer';
import studentReducer from '../features/student/studentReducer';
import topicReducer from '../features/topic/TopicReducer';
import gradeReducer from '../features/grade/gradeReducer';
import studentTopicReducer from '../features/studentTopicList/StudentTopicReducer';


const rootReducer = {
	mentorReducer,
	studentReducer,
	topicReducer,
	gradeReducer,
	studentTopicReducer
};

const reducer = combineReducers(rootReducer);

export default reducer;
