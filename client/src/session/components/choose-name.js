import React from 'react';
import { connect } from 'react-redux';

import Button from '@material-ui/core/Button';
import { isDefined } from '../../utils/is-defined';
import FormDialog from '../../common/dialog/form-dialog';

import { addPlayer } from '../socket/add-player';

function ChooseName({player, sessionId}) {
  return (
    !isDefined(player.name) &&
    <FormDialog
      onSubmit={data => addPlayer({params: data, sessionId})}
      title="Choose your nickname"
      fields={[
        {label: 'Name', name: 'name'}
      ]}>
      <Button
        variant="contained"
        color="primary">
        Choose username to join
      </Button>
    </FormDialog>
  );
}

export default connect(({session}) => ({
  player: session.player
}))(ChooseName);