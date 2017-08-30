import { combineReducers } from 'redux';
import build from './build';
import builds from './builds';

const rootReducer = combineReducers({
  builds,
  build,
});

export default rootReducer;
