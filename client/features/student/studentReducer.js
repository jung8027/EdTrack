//example reducer that receives a prev state and an action and returns a new state

export default function studentReducer(state = {}, action) {
	switch (action.type) {
		case "FETCH_STUDENT":
			return Object.assign({}, state, action.payload.data);

		default:
			return state;
	}


}
