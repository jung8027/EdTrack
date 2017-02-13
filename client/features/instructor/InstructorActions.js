import axios from "axios";

export const fetchInstructor = () => {
	const request = axios.get("/api/instructor/1");
	return dispatch => {
		request.then( instructor => {
			console.log("/api/instructor/1", instructor);
			dispatch({ type: "FETCH_INSTRUCTOR", payload: instructor.data });
		});
	};
};

