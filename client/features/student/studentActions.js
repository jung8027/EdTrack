import axios from 'axios';

//asynchronous actions using redux thunk
export function fetchStudent(id) {
	console.log('id from actions',id);
	const request = axios.get(`/api/student/${id}`);
	return (dispatch) => {
		request.then((data) => {
			console.log('student data ',data);
			dispatch({type: 'FETCH_STUDENT', payload: data});
		});
	};
}

//asynchronous actions using redux thunk
// export function fetchStudents() {
// 	const request = axios.get(`/api/student`);
// 	return (dispatch) => {
// 		request.then((data) => {
// 			console.log('student data ',data);
// 			dispatch({type: 'FETCH_STUDENTS', payload: data});
// 		});
// 	};
// }

export const fetchStudents = () => (dispatch) => {
	axios.get('/api/student')
		.then((data) => {
			dispatch({type: 'FETCH_STUDENTS', payload: data});
		});
};
