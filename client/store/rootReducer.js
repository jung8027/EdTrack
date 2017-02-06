import {combineReducers} from 'redux';
import mentorReducer from '../features/mentor/mentorReducer';
import studentReducer from '../features/student/studentReducer';

const rootReducer = {
	mentorReducer,
	studentReducer
};

const reducer = combineReducers(rootReducer);

export default reducer;
