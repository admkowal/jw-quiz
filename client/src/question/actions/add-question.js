import { call } from 'redux-saga/effects';

import { request, POST } from '../../utils/http';
import { takeLatest } from '../../utils/redux-saga';
import { URLS } from '../../utils/endpoints';

import { actions, ADD_QUESTION } from './types';

export const requestAddQuestion = data => ({type: actions[ADD_QUESTION], data});

export function* addQuestion({data}) {
  yield call(request, {
    type: POST,
    config: data,
    url: URLS.QUESTION
  });
}

function* watchRequestAddQuestion() {
  yield takeLatest(actions[ADD_QUESTION], addQuestion);
}

export default watchRequestAddQuestion();