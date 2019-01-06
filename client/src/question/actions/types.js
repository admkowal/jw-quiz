import { createSagaActionTypes } from '../../utils/action-factory';

export const ADD_QUESTION = 'ADD_QUESTION';
export const EDIT_QUESTION = 'EDIT_QUESTION';
export const GET_QUESTION = 'GET_QUESTION';

export const actions = createSagaActionTypes('QUESTION_DETAILS', [
  ADD_QUESTION,
  EDIT_QUESTION,
  GET_QUESTION
]);