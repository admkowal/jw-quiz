import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core';

import './css/index.scss';
import App from './app/app';
import { MUI_THEME } from './const';
import rootSaga from './store/sagas';
import configureStore from './store/configure-store';
import setupAxiosInterceptors from './utils/axios-interceptor';

window.React = React;
const materialTheme = createMuiTheme(MUI_THEME);

export const history = createBrowserHistory();

const store = configureStore();
store.runSaga(rootSaga);
setupAxiosInterceptors();

function render() {
  ReactDOM.render((
    <Provider store={store}>
      <MuiThemeProvider theme={materialTheme}>
        <Router history={history}>
          <App />
        </Router>
      </MuiThemeProvider>
    </Provider>
  ), document.getElementById('root'));
}

if (process.env.NODE_ENV !== 'production' && module.hot) {
  module.hot.accept('./app/app', render);
}

render();