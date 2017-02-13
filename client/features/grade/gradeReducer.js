export default function gradeReducer(state = [], action) {
	switch (action.type) {
		case "FETCH_GRADE":
			console.log('return', 'action.payload:', action.payload);
			return action.payload;

		default:
			return state;
	}


}
