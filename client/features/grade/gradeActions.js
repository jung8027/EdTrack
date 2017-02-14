import axios from 'axios';

const fetchGrade = ()  => {

	const request = axios.get("api/grade/2");
	return (dispatch) => {
		request.then((grade) => {
			dispatch({type: 'FETCH_GRADE', payload: grade.data});
		});
	};
}


const fetchAllGrades = ()  => {

	const request = axios.get("api/grade/");
	return (dispatch) => {
		request.then((allGrade) => {
			console.log('api/grade/ response:',allGrade);
			dispatch({type: 'FETCH_ALL_GRADE', payload: allGrade});
		});
	};
}

export {
	fetchGrade,
	fetchAllGrades
};