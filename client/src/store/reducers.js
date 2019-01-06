import { combineReducers } from 'redux';

import sessions from '../session/list/reducers';
import question from '../question/reducers';
import session from '../session/reducers';

const reducers = combineReducers({
  sessions,
  session,
  question
});

export default reducers;