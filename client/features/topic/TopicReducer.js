export default function topicReducer(state = {topics:[], selectedTopics:[],studentTopics:{}}, action) {
	switch (action.type) {
		case "FETCH_TOPIC":
			let topicList = Object.assign([], state.topics , action.payload.data);
			return Object.assign({}, state, {topics: topicList});
		case "SAVE_TOPIC_LIST":
			let selectedList = Object.assign([], state.selectedTopics , action.payload);
			return Object.assign({}, state, {selectedTopics: selectedList});
		case "FETCH_STUDENT_TOPIC":
			return Object.assign({}, state, {studentTopics: action.payload.data});
		default:
			return state;
	}
}
