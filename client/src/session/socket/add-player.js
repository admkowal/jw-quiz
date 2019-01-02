import { socket, store } from '../../index';

import { setPlayer, setAddPlayer } from '../reducers';

export function addPlayer({params, sessionId}) {
  socket.emit('addPlayer', {
    params,
    sessionId
  });
}

export function newPlayerListener() {
  socket.on('newPlayer', player => {
    store.dispatch(setPlayer(player));
  });
}

export function playerAddedListener() {
  socket.on('playerAdded', player => {
    store.dispatch(setAddPlayer(player));
  });
}