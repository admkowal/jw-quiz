import { createReduxActionTypes } from '../../utils/action-factory';

export const SET_QUESTION = 'SET_QUESTION';

export const actions = createReduxActionTypes('QUESTION_DETAILS', [
  SET_QUESTION
]);

export const setQuestion = question => ({type: actions[SET_QUESTION], question});

export default function Question(state = {
  answers: [...Array(4)]
}, action) {
  switch (action.type) {
    case actions[SET_QUESTION]:
      return {
        ...state,
        ...action.question
      }

    default:
      return state;
  }
}