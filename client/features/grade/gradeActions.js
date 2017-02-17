import axios from 'axios';

const fetchGrade = (id)  => {

	const request = axios.get("/api/grade/"+id);
	return (dispatch) => {
		request.then((grade) => {
			dispatch({type: 'FETCH_GRADE', payload: grade.data});
		});
	};
};


const fetchAllGrades = ()  => {

	const request = axios.get("/api/grade");
	return (dispatch) => {
		request.then((allGrade) => {
			console.log('api/grade/ response:',allGrade.data);
			dispatch({type: 'FETCH_ALL_GRADE', payload: allGrade.data});
		});
	};
};

export {
	fetchGrade,
	fetchAllGrades
};
