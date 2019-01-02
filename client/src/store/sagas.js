import { all } from 'redux-saga/effects';

import watchRequestCreateSession from '../app/actions/create-session';
import watchRequestGetSessions from '../session/list/actions';

export default function* rootSaga() {
  try {
    yield all([
      watchRequestCreateSession,
      watchRequestGetSessions
    ])
  } catch (e) {
    console.warn('Saga error:', e);
  }
}