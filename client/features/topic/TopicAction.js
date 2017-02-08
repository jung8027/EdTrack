import axios from 'axios';

export const fetchTopics = () => (dispatch) => {
  axios.get('/api/topic')
  .then((data) => {
    dispatch({type: 'FETCH_TOPIC', payload: data});
  });
};
