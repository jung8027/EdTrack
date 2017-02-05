import {createStore, applyMiddleware, compose} from 'redux';
import reducer from './rootReducer';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';//this middleware ensures immutability of the redux store
import logger from 'redux-logger';//logs actions, prev state and next state to the console
import thunk from 'redux-thunk';


const enhancer = compose(
	applyMiddleware(logger(), thunk, reduxImmutableStateInvariant())
);


export default function configureStore(initialState) {
	return createStore(
		reducer,
		initialState,
		enhancer);
}
