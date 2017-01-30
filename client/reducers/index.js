import {combineReducers} from 'redux';
import exampleReducer from './exampleReducer';

const rootReducer = {
	//here goes specific reducers
	exampleReducer
};

const reducer = combineReducers(rootReducer);

export default reducer;
