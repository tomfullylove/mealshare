import SagaTester from 'redux-saga-tester';

import {testAction} from '../actions';
import {testSaga} from '../sagas';
import * as types from '../types';

describe('Saga', () => {
  let sagaTester: SagaTester<{}>;

  beforeEach(() => {
    sagaTester = new SagaTester({});
    sagaTester.start(testSaga);
  });
  it('Should console.log when called', () => {
    sagaTester.dispatch(testAction('test'));
    sagaTester.waitFor(types.TEST_SUCCESS_ACTION);
    expect(sagaTester.numCalled(types.TEST_SUCCESS_ACTION)).toEqual(1);
  });
});
