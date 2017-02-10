//example reducer that receives a prev state and an action and returns a new state

export default function studentTopicReducer(state = {}, action) {
	switch (action.type) {
		case "FETCH_STUDENT_TOPIC":
			return action.payload.data;
		default:
			return state;
	}
}


