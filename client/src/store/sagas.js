import { all } from 'redux-saga/effects';

export default function* rootSaga() {
  try {
    yield all([])
  } catch (e) {
    console.warn('Saga error:', e);
  }
}