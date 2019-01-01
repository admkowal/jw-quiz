import React from 'react';
import { connect } from 'react-redux';
import { Form } from 'react-final-form';
import { Field } from 'react-final-form';
import TextField from '../../common/forms/mui/text-field';

import { requestCreateSession } from './actions';

function CreateSessionForm({requestCreateSession}) {
  return (
    <Form
      onSubmit={requestCreateSession}
      render={({handleSubmit, pristine, invalid}) => (
        <form id="a-session-form" onSubmit={handleSubmit}>
          <Field
            name="sessionName"
            label="Session name"
            className="odf-name"
            autoFocus={true}
            component={TextField} />
          <button type="submit" disabled={pristine || invalid}>
            Create
          </button>
        </form>
      )}>
    </Form>
  );
}

export default connect(null, {
  requestCreateSession
})(CreateSessionForm);
