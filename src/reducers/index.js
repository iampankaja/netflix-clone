import { combineReducers } from 'redux';

import mainShow from './tvshowsReducer';

const rootReducer = combineReducers({
  mainShow,
});

export default rootReducer;
