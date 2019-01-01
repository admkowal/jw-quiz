import {
  call,
  takeLatest as _takeLatest,
  takeEvery as _takeEvery,
  throttle as _throttle,
} from 'redux-saga/effects';
import { NODE_ENV } from '../const';

export function tryCatch(saga) {
  const wrapped = function* wrappedTryCatch() {
    try {
      yield call(saga, ...arguments);
    } catch (e) {
      if (process.env.NODE_ENV !== NODE_ENV.TEST) {
        console.warn("Error caught in saga: ", e);
      }
    }
  };
  wrapped._original = saga;
  return wrapped;
}

export function takeLatest(pattern, worker, ...args) {
  return _takeLatest(pattern, tryCatch(worker), ...args);
}

export function takeEvery(pattern, worker, ...args) {
  return _takeEvery(pattern, tryCatch(worker), ...args);
}

export function throttle(ms, pattern, worker, ...args) {
  return _throttle(ms, pattern, tryCatch(worker), ...args);
}