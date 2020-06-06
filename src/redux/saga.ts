import {fork} from 'redux-saga/effects';
import {SagaIterator} from 'redux-saga';
import {saga as configSaga} from './config';

function* rootSaga(): SagaIterator {
  yield fork(configSaga);
}

export default rootSaga;
