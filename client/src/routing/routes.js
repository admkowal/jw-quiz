import React, { Component } from 'react';
import { Switch, Route } from 'react-router';

import { NAV_URLS } from '../utils/navigation-service';

import SessionList from '../session/list/list';
import Session from '../session/session';
import App from '../app/app';
import Question from '../question/question';

export default class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path={NAV_URLS.HOME} component={App} />

        <Route exact path={NAV_URLS.SESSION} component={SessionList} />
        <Route exact path={`${NAV_URLS.SESSION}/:id`} component={Session} />

        <Route exact path={`${NAV_URLS.QUESTION}/:id?`} component={Question} />
      </Switch>
    );
  }
}