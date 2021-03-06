import React from 'react';
import ReactDOM from 'react-dom';
import io from 'socket.io-client';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core';

import './css/index.scss';
import Routes from './routing/routes';
import rootSaga from './store/sagas';
import configureStore from './store/configure-store';
import setSocketListeners from './utils/socket-listeners';
import setupAxiosInterceptors from './utils/axios-interceptor';

window.React = React;
export const history = createBrowserHistory();

export const socket = io();
export const store = configureStore();
store.runSaga(rootSaga);
setupAxiosInterceptors();

setSocketListeners();

function render() {
  ReactDOM.render((
    <Provider store={store}>
      <MuiThemeProvider theme={createMuiTheme({
        typography: {useNextVariants: true}})}>
        <Router history={history}>
          <Routes />
        </Router>
      </MuiThemeProvider>
    </Provider>
  ), document.getElementById('root'));
}

if (process.env.NODE_ENV !== 'production' && module.hot) {
  module.hot.accept('./routing/routes', render);
}

render();