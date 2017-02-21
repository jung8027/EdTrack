import axios from "axios";

export const fetchInstructor = (id) => {
	const request = axios.get(`/api/instructor/${id}`);
	return dispatch => {
		request.then( instructor => {
			dispatch({ type: "FETCH_INSTRUCTOR", payload: instructor.data });
		});
	};
};

