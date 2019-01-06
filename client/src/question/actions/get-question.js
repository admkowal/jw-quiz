import { call, put } from 'redux-saga/effects';

import { request } from '../../utils/http';
import { takeLatest } from '../../utils/redux-saga';
import { URLS } from '../../utils/endpoints';

import { actions, GET_QUESTION } from './types';
import { setQuestion } from '../reducers';

export const requestGetQuestion = id => ({type: actions[GET_QUESTION], id});

export function* getQuestion({id}) {
  const response = yield call(request, {
    config: {
      params: {
        id
      }
    },
    url: URLS.QUESTION
  });

  yield put(setQuestion(response.data))
}

function* watchRequestGetQuestion() {
  yield takeLatest(actions[GET_QUESTION], getQuestion);
}

export default watchRequestGetQuestion();