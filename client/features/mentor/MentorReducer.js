//example reducer that receives a prev state and an action and returns a new state

export default function mentorReducer(state = [], action) {
	switch (action.type) {
		case "FETCH_MENTOR":
			return action.payload;
		default:
			return state;
	}
}
