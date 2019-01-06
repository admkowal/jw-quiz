import { call } from 'redux-saga/effects';

import { request, PUT } from '../../utils/http';
import { takeLatest } from '../../utils/redux-saga';
import { URLS } from '../../utils/endpoints';

import { actions, EDIT_QUESTION } from './types';

export const requestEditQuestion = data => ({type: actions[EDIT_QUESTION], data});

export function* editQuestion({data}) {
  yield call(request, {
    type: PUT,
    config: data,
    url: URLS.QUESTION
  });
}

function* watchRequestEditQuestion() {
  yield takeLatest(actions[EDIT_QUESTION], editQuestion);
}

export default watchRequestEditQuestion();