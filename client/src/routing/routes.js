import React, { Component } from 'react';
import { Switch, Route } from 'react-router';

import { NAV_URLS } from '../utils/navigation-service';
import ErrorBoundary from '../common/error-boundary';

export default class App extends Component {
  render() {
    return (
      <ErrorBoundary>
        <Switch>
          <Route exact path={NAV_URLS.HOME} component={App} />
        </Switch>
      </ErrorBoundary>
    );
  }
}