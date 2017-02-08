export default function topicReducer(state = [], action) {
	switch (action.type) {
		case "FETCH_TOPIC":
			return action.payload.data;
		default:
			return state;
	}
}
