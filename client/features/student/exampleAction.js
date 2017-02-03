import $ from 'jquery';


//example of an redux action
// export function someAction(payload) {
// 	return {type: 'SOMEACTIONS', payload: payload};
// }


//example of an asynchronous actions using redux thunk
export function fetchSomething() {

	const request = $.ajax({
		url: "api/students",
		success: function (data) {
			console.log('data', data)
		}
	});

	return (dispatch) => {
		request.then((data) => {
			dispatch({type: 'FETCH_STUDENT', payload: data});
		});
	};
}
