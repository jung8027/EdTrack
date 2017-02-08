import {combineReducers} from 'redux';
import mentorReducer from '../features/mentor/MentorReducer';
import studentReducer from '../features/student/studentReducer';
import topicReducer from '../features/topic/TopicReducer';

const rootReducer = {
	mentorReducer,
	studentReducer,
	topicReducer
};

const reducer = combineReducers(rootReducer);

export default reducer;
