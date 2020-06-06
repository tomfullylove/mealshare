import * as actions from '../actions';
import * as types from '../types';
import reducer from '../reducer';

describe('Reducer', () => {
  const getInitialState = (initial?: Partial<types.ConfigState>) =>
    reducer(initial as types.ConfigState, {} as any);

  it('Should return the initial state', () => {
    expect(getInitialState()).toMatchSnapshot();
  });

  it('Should set test value', () => {
    const initialState = getInitialState();
    const state = reducer(initialState, actions.testAction('test'));
    expect(state.test).toEqual('test');
  });
});
