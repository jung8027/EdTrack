export default function gradeReducer(state = [], action) {
	switch (action.type) {
		case "FETCH_GRADE":
			// return Object.assign({}, state, action.payload);
			console.log('return', 'action.payload:', action.payload);
			return action.payload;
		case "FETCH_ALL_GRADE":
			// return Object.assign({}, state, action.payload);
			console.log('FETCH_ALL_GRADE', 'action.payload:', action.payload);
			return action.payload;

		default:
			return state;
	}


}
