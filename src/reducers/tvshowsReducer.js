import {
  FETCH_MAIN_SHOW_SUCCESS,
  FETCH_MAIN_SHOW_FAILURE,
  FETCH_MAIN_SHOW_BEGINS,
} from '../constatnts/actionTypes';

const initialMainShowState = {
  show: {},
  loading: false,
  error: null,
};

export default function(state = initialMainShowState, action) {
  switch (action.type) {
    case FETCH_MAIN_SHOW_BEGINS:
      return {
        ...state,
        loading: true,
        error: false,
      };
    case FETCH_MAIN_SHOW_SUCCESS:
      return {
        ...state,
        loading: false,
        show: action.payload,
      };
    case FETCH_MAIN_SHOW_FAILURE:
      return {
        ...state,
        loading: false,
        show: {},
        error: action.payload,
      };
    default:
      return state;
  }
}
