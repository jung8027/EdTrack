export default function instructorReducer( state = {}, action ){
	switch (action.type) {
		case "FETCH_INSTRUCTOR":
			return action.payload;
		default: return state;
	}
}
