import { call, put } from 'redux-saga/effects';

import { request } from '../../utils/http';
import { takeLatest } from '../../utils/redux-saga';
import { URLS } from '../../utils/endpoints';
import { createSagaActionTypes } from '../../utils/action-factory';

import { setSession } from '../reducers';

export const GET_SESSION = 'GET_SESSION';
export const actions = createSagaActionTypes('SESSION_DETAILS', [GET_SESSION]);
export const requestGetSession = sessionId => ({type: actions[GET_SESSION], sessionId});

export function* getSession({sessionId}) {
  const response = yield call(request, {
    config: {
      params: { sessionId }
    },
    url: URLS.GET_SESSION
  });

  yield put(setSession(response.data));
}

function* watchRequestGetSession() {
  yield takeLatest(actions[GET_SESSION], getSession);
}

export default watchRequestGetSession();