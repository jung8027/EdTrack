export default function instructorReducer( state = {}, action ){
	switch (action.type) {
		case "FETCH_INSTRUCTOR":
			console.log('return', 'action.payload:', action.payload);
			return action.payload;
		default: return state;
	}
}
