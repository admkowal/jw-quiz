import React from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';

import { NAV_URLS } from '../utils/navigation-service';
import ErrorBoundary from '../common/error-boundary';
import NavBtn from '../common/buttons/nav-btn';
import FormDialog from '../common/dialog/form-dialog';

import { requestCreateSession } from './actions/create-session';

function App({requestCreateSession}) {
  return (
    <ErrorBoundary>
      <div className="app">
        <NavBtn to={NAV_URLS.SESSION} label="Join session" />
        <FormDialog
          onSubmit={requestCreateSession}
          title="Create session"
          desc="Type name to create session"
          label="Name"
          name="name">
          <Button
            variant="contained"
            color="primary">
            Create session
          </Button>
        </FormDialog>
      </div>
    </ErrorBoundary>
  );
}

export default connect(null, {requestCreateSession})(App);