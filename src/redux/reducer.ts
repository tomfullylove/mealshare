import {combineReducers} from 'redux';

import {reducer as configReducer} from './config';
import {reducer as mealsReducer} from './meals';

export default combineReducers({
  config: configReducer,
  meals: mealsReducer,
});
