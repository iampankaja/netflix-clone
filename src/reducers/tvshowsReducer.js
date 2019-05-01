import { POPULAR_SHOWS, TOP_RATED_SHOWS } from '../constatnts/actionTypes';

const initialShowsState = {
  showDetails: {},
  loading: false,
  error: null,
};

export function popularShowReducer(state = initialShowsState, action) {
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
        showDetails: action.payload,
      };
    case POPULAR_SHOWS.FAILURE:
      return {
        ...state,
        loading: false,
        showDetails: {},
        error: action.payload,
      };
    default:
      return state;
  }
}

export function topRatedShowReducer(state = initialShowsState, action) {
  switch (action.type) {
    case TOP_RATED_SHOWS.BEGINS:
      return {
        ...state,
        loading: true,
        error: false,
      };
    case TOP_RATED_SHOWS.SUCCESS:
      return {
        ...state,
        loading: false,
        showDetails: action.payload,
      };
    case TOP_RATED_SHOWS.FAILURE:
      return {
        ...state,
        loading: false,
        showDetails: {},
        error: action.payload,
      };
    default:
      return state;
  }
}

// export function latestShowReducer(state = initialShowsState, action) {
//   switch (action.type) {
//     case LATEST_SHOWS.BEGINS:
//       return {
//         ...state,
//         loading: true,
//         error: false,
//       };
//     case LATEST_SHOWS.SUCCESS:
//       return {
//         ...state,
//         loading: false,
//         showDetails: action.payload,
//       };
//     case LATEST_SHOWS.FAILURE:
//       return {
//         ...state,
//         loading: false,
//         showDetails: {},
//         error: action.payload,
//       };
//     default:
//       return state;
//   }
// }
