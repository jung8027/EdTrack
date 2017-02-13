import axios from "axios";

const fetchInstructor = () => {
	const request = axios.get("/api/instructor/1");
	return dispatch => {
		request.then( instructor => {
			console.log("/api/instructor", instructor);
			dispatch({ type: "FETCH_INSTRUCTOR", payload: instructor.data });
		});
	};
};

export default fetchInstructor;
