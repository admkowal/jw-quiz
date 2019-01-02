import { call } from 'redux-saga/effects';

import { history } from '../../index';
import { request, POST } from '../../utils/http';
import { takeLatest } from '../../utils/redux-saga';
import { STATUS_CODES, URLS } from '../../utils/endpoints';
import { getSessionUrl } from '../../utils/navigation-service';
import { createSagaActionTypes } from '../../utils/action-factory';

export const REQUEST_CREATE_SESSION = 'REQUEST_CREATE_SESSION';
export const actions = createSagaActionTypes('ADMIN_SESSION', [REQUEST_CREATE_SESSION]);
export const requestCreateSession = data => ({type: actions[REQUEST_CREATE_SESSION], data});

export function* createSession({data}) {
  const response = yield call(request, {
    type: POST,
    config: data,
    url: URLS.CREATE_SESSION,
    successMsg: 'Session successfully created!',
    failMsg: 'Sorry, creation of the session failed'
  });

  if (response.status === STATUS_CODES.CREATED) {
    history.push(getSessionUrl(response.data.id));
  }
}

function* watchRequestCreateSession() {
  yield takeLatest(actions[REQUEST_CREATE_SESSION], createSession);
}

export default watchRequestCreateSession();