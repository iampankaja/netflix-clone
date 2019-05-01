import { combineReducers } from 'redux';

import mainShow from './mainShowReducer';
import { popularShowReducer, topRatedShowReducer } from './tvshowsReducer';

const rootReducer = combineReducers({
  mainShow,
  popularTvShows: popularShowReducer,
  // latestTvShows: latestShowReducer,
  topRatedTvShows: topRatedShowReducer,
});

export default rootReducer;
