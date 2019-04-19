import axios from 'axios';
import * as config from '../config';
import { API_URL } from '../constatnts/routes';
import {
  FETCH_MAIN_SHOW_SUCCESS,
  FETCH_MAIN_SHOW_BEGINS,
  FETCH_MAIN_SHOW_FAILURE,
} from '../constatnts/actionTypes';

const fetchMainShowSuccess = show => ({
  type: FETCH_MAIN_SHOW_SUCCESS,
  payload: show,
});

const fetchMainShowFailure = error => ({
  type: FETCH_MAIN_SHOW_FAILURE,
  payload: error,
});

const fetchMainShowBegins = () => ({
  type: FETCH_MAIN_SHOW_BEGINS,
});

const getMainShow = () => dispatch => {
  dispatch(fetchMainShowBegins());
  const popularMovies = `${API_URL}/tv/popular?api_key=${
    config.MOVIE_DB_API_KEY
  }`;
  axios
    .get(popularMovies)
    .then(response => response.data)
    .then(data => dispatch(fetchMainShowSuccess(data.results[0])))
    .catch(err => dispatch(fetchMainShowFailure(err)));
};

export default getMainShow;
