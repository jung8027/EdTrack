import axios from 'axios';
import querystring from 'querystring';

export const fetchTopics = () => (dispatch) => {
	axios.get('/api/topic')
		.then((data) => {
			dispatch({type: 'FETCH_TOPIC', payload: data});
		});
};


export function addStudentTopic(studentId, selectedTopics) {
	console.log('selected topic in actions', selectedTopics);
	const request = axios.post(`api/student/${parseInt(studentId)}/topicList/`,
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

