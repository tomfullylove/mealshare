import {applyMiddleware, createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';

import rootSaga from './saga';
import reducer from './reducer';

const sagaMiddeware = createSagaMiddleware();

const composeEnhancers = composeWithDevTools({});

const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(sagaMiddeware)),
);

sagaMiddeware.run(rootSaga);

export default store;
