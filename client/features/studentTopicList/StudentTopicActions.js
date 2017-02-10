import axios from 'axios';

//example of an redux action
// export function someAction(payload) {
// 	return {type: 'SOMEACTIONS', payload: payload};
// }


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

// export function addStudentTopic(studentId, selectedTopics) {
// 	console.log('selected topic in actions', selectedTopics);
// 	const request = axios.post(`'api/student/${parseInt(studentId)}/topicList/`,{selectedTopics: selectedTopics});
// 	return (dispatch) => {
// 		request.then(() => {
// 			dispatch({type: 'SAVE_TOPIC_LIST', payload: selectedTopics});
// 		});
// 	};
// }
