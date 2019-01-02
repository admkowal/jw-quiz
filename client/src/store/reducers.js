import { combineReducers } from 'redux';

import sessions from '../session/list/reducers';

const reducers = combineReducers({
  sessions
});

export default reducers;