import axios from 'axios';

//example of an asynchronous actions using redux thunk
// export function fetchMentors() {

// 	const request = $.ajax({
// 		url: '/api/mentor',
// 		method: 'GET'
// 	});

// 	return (dispatch) => {
// 		request.then((data) => {
// 			console.log('dispatch', data)
// 			dispatch({type: 'FETCH_MENTOR', payload: data});
// 		});
// 	};
// }

export const fetchMentors = () => (dispatch) => {
  axios.get('/api/mentor')
  .then((data) => {
    dispatch({type: 'FETCH_MENTOR', payload: data});
  });
};
