import axios from 'axios';

export function fetchGrade() {

	const request = axios.get("api/grade/1");
	return (dispatch) => {
		request.then((grade) => {
			console.log('api/grade/1 response:',grade);
			dispatch({type: 'FETCH_GRADE', payload: grade.data});
		});
	};
}
