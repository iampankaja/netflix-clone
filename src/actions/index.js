import axios from 'axios';
import * as config from '../config';
import { API_URL } from '../constatnts/routes';
import {
  MAIN_SHOW,
  POPULAR_SHOWS,
  TOP_RATED_SHOWS,
  LATEST_SHOWS,
} from '../constatnts/actionTypes';
import { showCategory } from '../constatnts/other';

const fetchMainShowSuccess = show => ({
  type: MAIN_SHOW.SUCCESS,
  payload: show,
});

const fetchMainShowFailure = error => ({
  type: MAIN_SHOW.FAILURE,
  payload: error,
});

const fetchMainShowBegins = () => ({
  type: MAIN_SHOW.BEGINS,
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
  type: POPULAR_SHOWS.BEGINS,
});

const fetchShowsSuccess = (type, shows) => {
  if (type === showCategory.POPULAR) {
    return {
      type: POPULAR_SHOWS.SUCCESS,
      payload: shows,
    };
  }
  if (type === showCategory.LATEST) {
    return {
      type: LATEST_SHOWS.SUCCESS,
      payload: shows,
    };
  }
  if (type === showCategory.TOP_RATED) {
    return {
      type: TOP_RATED_SHOWS.SUCCESS,
      payload: shows,
    };
  }
  return {
    type: 'ERROR',
    payload: null,
  };
};

const fetchShowsFailure = error => ({
  type: POPULAR_SHOWS.FAILURE,
  payload: error,
});

export const fetchShows = type => dispatch => {
  dispatch(fetchShowsBegin());
  const apiRequest = `${API_URL}/tv/${type}?api_key=${config.MOVIE_DB_API_KEY}`;
  axios
    .get(apiRequest)
    .then(response => response.data)
    .then(data => dispatch(fetchShowsSuccess(type, data)))
    .catch(err => dispatch(fetchShowsFailure(err)));
};
