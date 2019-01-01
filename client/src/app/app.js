import React, { Component } from 'react';
import { Switch, Route } from 'react-router';

import { NAV_URLS } from '../utils/navigation-service';
import ErrorBoundary from '../common/error-boundary';

import Admin from '../admin/admin';

export default class App extends Component {
  render() {
    return (
      <ErrorBoundary>
        <div className="app">
        <Switch>
          <Route path={NAV_URLS.ADMIN_PANEL} component={Admin} />
        </Switch>
        </div>
      </ErrorBoundary>
    );
  }
}
