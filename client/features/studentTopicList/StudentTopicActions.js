import axios from 'axios';


//example of an asynchronous actions using redux thunk
export function fetchStudentTopic(studentId) {

	const request = axios.get(`api/student/${parseInt(studentId)}/topicList`);
	return (dispatch) => {
		request.then((data) => {
			console.log('studentTopic list ',data);
			dispatch({type: 'FETCH_STUDENT_TOPIC', payload: data});
		});
	};
}
