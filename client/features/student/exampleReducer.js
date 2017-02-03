//example reducer that receives a prev state and an action and returns a new state

export default function exampleReducer(state = {}, action) {
	switch (action.type) {
		case "SOMETHING":
			return Object.assign({}, state, action.payload);
		default:
			return state;
	}

}
