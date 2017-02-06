import {combineReducers} from 'redux';
import studentReducer from '../features/student/studentReducer';

const rootReducer = {
	//here goes specific reducers
	studentReducer
};

const reducer = combineReducers(rootReducer);

export default reducer;
