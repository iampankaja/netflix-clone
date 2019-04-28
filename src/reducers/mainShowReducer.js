import { MAIN_SHOW } from '../constatnts/actionTypes';

const initialMainShowState = {
  show: {},
  loading: false,
  error: null,
};

export default function(state = initialMainShowState, action) {
  switch (action.type) {
    case MAIN_SHOW.BEGINS:
      return {
        ...state,
        loading: true,
        error: false,
      };
    case MAIN_SHOW.SUCCESS:
      return {
        ...state,
        loading: false,
        show: action.payload,
      };
    case MAIN_SHOW.FAILURE:
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
