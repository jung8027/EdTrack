import {combineReducers} from 'redux';
import exampleReducer from '../features/student/exampleReducer';
import mentorReducer from '../features/mentor/mentorReducer';

const rootReducer = {
	//here goes specific reducers
	mentorReducer,
	exampleReducer
};

const reducer = combineReducers(rootReducer);

export default reducer;
