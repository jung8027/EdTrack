//example reducer that receives a prev state and an action and returns a new state

export default function studentReducer(state = {}, action) {
	switch (action.type) {
		case "FETCH_STUDENT":
			state = Object.assign({}, state, action.payload);
			console.log('student state', state);
			return state;
		default:
			return state;
	}


}
