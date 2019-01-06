import { all } from 'redux-saga/effects';

import createSession from '../app/actions/create-session';
import sessions from '../session/list/actions';
import session from '../session/actions';
import question from '../question/actions';

export default function* rootSaga() {
  try {
    yield all([
      createSession,
      sessions,
      ...session,
      ...question
    ])
  } catch (e) {
    console.warn('Saga error:', e);
  }
}