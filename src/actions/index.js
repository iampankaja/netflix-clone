import axios from 'axios';
import * as config from '../config';
import { API_URL } from '../constatnts/routes';
import {
  MAIN_SHOW,
  POPULAR_SHOWS,
  TOP_RATED_SHOWS,
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

const fetchShowsBegin = category => {
  if (category === showCategory.POPULAR) {
    return { type: POPULAR_SHOWS.BEGINS };
  }
  if (category === showCategory.TOP_RATED) {
    return { type: TOP_RATED_SHOWS.BEGINS };
  }
  return {};
};

const fetchShowsSuccess = (category, shows) => {
  if (category === showCategory.POPULAR) {
    return {
      type: POPULAR_SHOWS.SUCCESS,
      payload: shows,
    };
  }
  if (category === showCategory.TOP_RATED) {
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

const fetchShowsFailure = (category, error) => {
  if (category === showCategory.POPULAR) {
    return {
      type: POPULAR_SHOWS.FAILURE,
      payload: error,
    };
  }
  if (category === showCategory.TOP_RATED) {
    return {
      type: TOP_RATED_SHOWS.FAILURE,
      payload: error,
    };
  }
  return {
    type: 'ERROR',
    payload: error,
  };
};

export const fetchShows = category => dispatch => {
  dispatch(fetchShowsBegin(category));
  const apiRequest = `${API_URL}/tv/${category}?api_key=${
    config.MOVIE_DB_API_KEY
  }`;
  axios
    .get(apiRequest)
    .then(response => response.data)
    .then(data => dispatch(fetchShowsSuccess(category, data)))
    .catch(err => dispatch(fetchShowsFailure(category, err)));
};
