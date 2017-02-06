import configureStore from '../store/configureStore';


let store = configureStore();


export function enterHandler(fetch){
	store.dispatch(fetch());
}

