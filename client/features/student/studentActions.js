import axios from 'axios';

//example of an asynchronous actions using redux thunk
export function fetchStudent() {

	const request = axios.get("api/student/1");
	return (dispatch) => {
		request.then((data) => {
			console.log('student data ',data);
			dispatch({type: 'FETCH_STUDENT', payload: data});
		});
	};
}
