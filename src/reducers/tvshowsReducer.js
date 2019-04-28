import { POPULAR_SHOWS } from '../constatnts/actionTypes';

const initialMainShowState = {
  show: {},
  loading: false,
  error: null,
};

export default function(state = initialMainShowState, action) {
  switch (action.type) {
    case POPULAR_SHOWS.BEGINS:
      return {
        ...state,
        loading: true,
        error: false,
      };
    case POPULAR_SHOWS.SUCCESS:
      return {
        ...state,
        loading: false,
        show: action.payload,
      };
    case POPULAR_SHOWS.FAILURE:
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
