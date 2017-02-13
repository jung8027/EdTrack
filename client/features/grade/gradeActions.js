import axios from 'axios';

export function fetchGrade() {

	const request = axios.get("api/grade/2");
	return (dispatch) => {
		request.then((grade) => {
			dispatch({type: 'FETCH_GRADE', payload: grade.data});
		});
	};
}
