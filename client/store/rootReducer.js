import {combineReducers} from 'redux';
import mentorReducer from '../features/mentor/mentorReducer';
import studentReducer from '../features/student/studentReducer';
import gradeReducer from '../features/grade/gradeReducer';

const rootReducer = {
	mentorReducer,
	studentReducer,
	gradeReducer
};

const reducer = combineReducers(rootReducer);

export default reducer;
