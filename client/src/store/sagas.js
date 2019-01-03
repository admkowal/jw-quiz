import { all } from 'redux-saga/effects';

import createSession from '../app/actions/create-session';
import sessions from '../session/list/actions';
import session from '../session/actions';

export default function* rootSaga() {
  try {
    yield all([
      createSession,
      sessions,
      ...session
    ])
  } catch (e) {
    console.warn('Saga error:', e);
  }
}