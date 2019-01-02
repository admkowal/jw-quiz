import { combineReducers } from 'redux';

import sessions from '../session/list/reducers';
import session from '../session/reducers';

const reducers = combineReducers({
  sessions,
  session
});

export default reducers;