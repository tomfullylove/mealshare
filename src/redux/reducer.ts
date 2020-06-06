import {combineReducers} from 'redux';

import {reducer as configReducer} from './config';

export default combineReducers({
  config: configReducer,
});
