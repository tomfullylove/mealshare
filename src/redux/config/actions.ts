import {TEST_ACTION, TEST_SUCCESS_ACTION, ConfigActionTypes} from './types';

export function testAction(value: string): ConfigActionTypes {
  return {
    type: TEST_ACTION,
    value,
  };
}

export function testSuccessAction(): ConfigActionTypes {
  return {
    type: TEST_SUCCESS_ACTION,
  };
}

export type TestActions =
  | ReturnType<typeof testAction>
  | ReturnType<typeof testSuccessAction>;
