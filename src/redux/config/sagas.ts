import {takeEvery, put} from 'redux-saga/effects';

import {TEST_ACTION} from './types';
import {testSuccessAction} from './actions';

export function* testSaga() {
  yield put(testSuccessAction());
}

export default function* configSaga() {
  yield takeEvery(TEST_ACTION, testSaga);
}
