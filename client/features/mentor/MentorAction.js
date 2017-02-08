import axios from 'axios';

export const fetchMentors = () => (dispatch) => {
  axios.get('/api/mentor')
  .then((data) => {
    dispatch({type: 'FETCH_MENTOR', payload: data});
  });
};
