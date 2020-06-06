import * as actions from '../actions';
import * as types from '../types';

describe('Actions', () => {
  it('Should create a test action', () => {
    const expectedAction = {
      type: types.TEST_ACTION,
      value: 'test',
    };
    expect(actions.testAction('test')).toEqual(expectedAction);
  });
});
