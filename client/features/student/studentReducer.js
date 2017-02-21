//example reducer that receives a prev state and an action and returns a new state

export default function studentReducer(state = {student:{},students:[]}, action) {
	switch (action.type) {
		case "FETCH_STUDENT":
			return Object.assign({}, state, {student: action.payload.data});
		case "FETCH_STUDENTS":
			return Object.assign({}, state, {students: action.payload.data});

		default:
			return state;
	}
}
