import $ from 'jquery';

//example of an asynchronous actions using redux thunk
export function fetchMentors() {

	const request = $.ajax({
		url: 'api/mentor',
		method: 'GET'
	});

	return (dispatch) => {
		request.then((data) => {
			dispatch({type: 'FETCH_MENTOR', payload: data});
		});
	};
}
