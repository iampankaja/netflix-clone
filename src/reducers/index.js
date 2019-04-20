import { combineReducers } from 'redux';

import mainShow from './mainShowReducer';
import tvShows from './tvshowsReducer';

const rootReducer = combineReducers({
  mainShow,
  tvShows,
});

export default rootReducer;
