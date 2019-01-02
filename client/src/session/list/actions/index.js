import { call, put } from 'redux-saga/effects';

import { request } from '../../../utils/http';
import { takeLatest } from '../../../utils/redux-saga';
import { URLS } from '../../../utils/endpoints';
import { createSagaActionTypes } from '../../../utils/action-factory';

import { setSessionList } from '../reducers';

export const REQUEST_GET_SESSIONS = 'REQUEST_GET_SESSIONS';
export const actions = createSagaActionTypes('SESSIONS_LIST', [REQUEST_GET_SESSIONS]);
export const requestCreateSession = () => ({type: actions[REQUEST_GET_SESSIONS]});

export function* getSessions() {
  const response = yield call(request, {
    url: URLS.GET_SESSIONS
  });

  yield put(setSessionList(response.data));
}

function* watchRequestGetSessions() {
  yield takeLatest(actions[REQUEST_GET_SESSIONS], getSessions);
}

export default watchRequestGetSessions();