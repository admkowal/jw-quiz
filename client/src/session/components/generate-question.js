import React from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';

import { requestQuestion } from '../socket/generate-question';

function GenerateQuestion({isAdmin, sessionId}) {
  if (!isAdmin) {
    return null;
  }
  return (
    <Button
      onClick={() => requestQuestion({sessionId})}
      variant="contained"
      color="primary">
      Generate question
    </Button>
  );
}

export default connect(({session}) => ({
  sessionId: session.id,
  isAdmin: session.player.isAdmin
}))(GenerateQuestion);