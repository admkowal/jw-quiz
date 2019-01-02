import { createReduxActionTypes } from '../../../utils/action-factory';

export const SET_LIST = 'SET_LIST';
export const actions = createReduxActionTypes('SESSION_LIST', [
  SET_LIST
]);

export const setSessionList = list => ({ type: actions[SET_LIST], list });

export default function sessions(state = { list: [] }, action) {
  switch (action.type) {
    case actions[SET_LIST]:
      return {
        ...state,
        list: [...action.list]
      }

    default:
      return state;
  }
}