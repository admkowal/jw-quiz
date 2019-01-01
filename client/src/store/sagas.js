import { all } from 'redux-saga/effects';

import watchRequestCreateSession from '../admin/create-session/actions';

export default function* rootSaga() {
  try {
    yield all([
      watchRequestCreateSession
    ])
  } catch (e) {
    console.warn('Saga error:', e);
  }
}