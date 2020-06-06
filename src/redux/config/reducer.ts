import {TEST_ACTION, ConfigState, ConfigActionTypes} from './types';

const initialState: ConfigState = {
  test: '',
};

function config(
  state: ConfigState = initialState,
  action: ConfigActionTypes,
): ConfigState {
  switch (action.type) {
    case TEST_ACTION:
      return {
        ...state,
        test: action.value,
      };
    default:
      return state;
  }
}

export default config;
