import axios from 'axios';
import querystring from 'querystring';

export const fetchTopics = () => (dispatch) => {
	axios.get('/api/topic')
		.then((data) => {
			dispatch({type: 'FETCH_TOPIC', payload: data});
		});
};


export function addStudentTopic(id,selectedTopics) {
	const request = axios.post(`/api/student/${id}/topic`,
		// The querystring.stringify() method produces a URL query string from a given obj by iterating through the object's "own properties"
		querystring.stringify(
			{selectedTopics: selectedTopics}), {
			headers: {
				"Content-Type": "application/x-www-form-urlencoded"
			}
		}
	);
	return (dispatch) => {
		request.then(() => {

			dispatch({type: 'SAVE_TOPIC_LIST', payload: selectedTopics});
		});
	};
}

export function fetchStudentTopic(id) {

	const request = axios.get(`/api/student/${id}/topic`);
	return (dispatch) => {
		request.then((data) => {
			console.log('studentTopic list ',data);
			dispatch({type: 'FETCH_STUDENT_TOPIC', payload: data});
		});
	};
}
