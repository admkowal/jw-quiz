import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware, { END } from 'redux-saga';

import rootReducer from './reducers';

export default function configureStore() {
  const sagaMiddleware = createSagaMiddleware();

  const store = createStore(
    rootReducer,
    {},
    composeWithDevTools(
      applyMiddleware(sagaMiddleware)
    )
  )

  if (module.hot) {
    module.hot.accept('./reducers', () => {
      const nextRootReducer = require('./reducers').default;
      store.replaceReducer(nextRootReducer);
    })
  }

  store.runSaga = sagaMiddleware.run;
  store.close = () => store.dispatch(END);
  return store;
}