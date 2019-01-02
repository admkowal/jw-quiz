import { createReduxActionTypes } from '../../utils/action-factory';

export const SET_PLAYER = 'SET_PLAYER';
export const PLAYER_ADDED = 'PLAYER_ADDED';
export const actions = createReduxActionTypes('SESSION_DETAILS', [
  SET_PLAYER,
  PLAYER_ADDED
]);

export const setPlayer = player => ({ type: actions[SET_PLAYER], player });
export const setAddPlayer = player => ({ type: actions[PLAYER_ADDED], player })

export default function session(state = {
  player: {},
  players: []
}, action) {
  switch (action.type) {
    case actions[SET_PLAYER]:
      return {
        ...state,
        player: action.player
      }

    case actions[PLAYER_ADDED]:
      return {
        ...state,
        players: [action.player, ...state.players]
      }

    default:
      return state;
  }
}