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

export const fetchMainShow = () => dispatch => {
  dispatch(fetchMainShowBegins());
  const gameofThrones = `${API_URL}/tv/1399?api_key=${
    config.MOVIE_DB_API_KEY
  }&append_to_response=videos`;
  axios
    .get(gameofThrones)
    .then(response => response.data)
    .then(data => dispatch(fetchMainShowSuccess(data)))
    .catch(err => dispatch(fetchMainShowFailure(err)));
};

const fetchShowsBegin = () => ({
  type: FETCH_MAIN_SHOW_BEGINS,
});

const fetchShowsSuccess = show => ({
  type: FETCH_MAIN_SHOW_SUCCESS,
  payload: show,
});

const fetchShowsFailure = error => ({
  type: FETCH_MAIN_SHOW_FAILURE,
  payload: error,
});

export const fetchShow = type => dispatch => {
  dispatch(fetchShowsBegin());
  const apiRequest = `${API_URL}/tv/${type}?api_key=${config.MOVIE_DB_API_KEY}`;
  axios
    .get(apiRequest)
    .then(response => response.data)
    .then(data => dispatch(fetchShowsSuccess(data)))
    .catch(err => dispatch(fetchShowsFailure(err)));
};
