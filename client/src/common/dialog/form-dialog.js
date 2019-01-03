import React, { Component, cloneElement } from 'react';
import { Form } from 'react-final-form';
import { Field } from 'react-final-form';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import TextField from '../forms/mui/text-field';

export default class FormDialog extends Component {
  constructor() {
    super();
    this.state = {
      open: false
    };
  }

  handleClickOpen = (e) => {
    e.stopPropagation();
    this.setState({ open: true });
  };

  handleClose = (e) => {
    e.stopPropagation();
    this.setState({ open: false });
  };

  handleConfirm = (data) => {
    this.props.onSubmit(data);
    this.setState({ open: false });
  }

  render() {
    const { title = '', children, desc = '', cancelText = 'Cancel', fields = [], submitText = 'Submit' } = this.props;
    return (
      <div className="common-form-dialog">
        {cloneElement(children, {onClick: this.handleClickOpen})}
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}>
          <DialogTitle className="cac-title">{title}</DialogTitle>
          <DialogContent>
            <DialogContentText className="cac-desc">
              {desc}
            </DialogContentText>
          </DialogContent>
          <Form
            onSubmit={this.handleConfirm}
            render={({handleSubmit, pristine, invalid}) => (
              <form onSubmit={handleSubmit}>
                {fields.map(field => (
                  <Field
                    key={field.name}
                    name={field.name}
                    label={field.label}
                    component={TextField} />
                ))}
                <Button onClick={this.handleClose} color="primary">
                  {cancelText}
                </Button>
                <Button type="submit" disabled={pristine || invalid} color="primary">
                  {submitText}
                </Button>
              </form>
            )}>
          </Form>
        </Dialog>
      </div>
    );
  }
}