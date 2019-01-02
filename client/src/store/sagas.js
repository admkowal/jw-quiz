import { all } from 'redux-saga/effects';

import watchRequestCreateSession from '../app/actions/create-session';

export default function* rootSaga() {
  try {
    yield all([
      watchRequestCreateSession
    ])
  } catch (e) {
    console.warn('Saga error:', e);
  }
}