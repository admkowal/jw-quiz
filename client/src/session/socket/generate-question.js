import { socket, store } from '../../index';

import { setQuestion } from '../reducers';

export function requestQuestion({sessionId}) {
  socket.emit('requestQuestion', {
    sessionId
  });
}

export function newQuestionListener() {
  socket.on('newQuestion', question => {
    store.dispatch(setQuestion(question));
  });
}