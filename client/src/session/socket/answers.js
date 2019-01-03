import { socket, store } from '../../index';

import { setPlayerAnswer } from '../reducers';

export function emitAnswer({sessionId, questionId, answerId}) {
  socket.emit('emitAnswer', {
    sessionId,
    questionId,
    answerId
  });
}

export function playerAnsweredListener() {
  socket.on('playerAnswered', data => {
    store.dispatch(setPlayerAnswer(data));
  });
}