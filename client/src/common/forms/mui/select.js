import React, { Component } from 'react';
import { connect } from 'react-redux';
import MuiSelect from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';

import { requestDictionary } from '../../../dictionaries/actions';
import { isDefined } from '../../../utils/is-defined';
import Optional from '../../../utils/optional';

class Select extends Component {
  componentDidMount() {
    const { requestDictionary, dictionaryType } = this.props;

    if (this.hasDictionaryType()) {
      requestDictionary(dictionaryType);
    }
  }
  hasDictionaryType() {
    return isDefined(this.props.dictionaryType);
  }
  render() {
    const {
      input: { name, value, onChange, ...inputProps },
      meta,
      label,
      formControlProps,
      children,
      className,
      onChange: customOnChange = () => { },
      dictionaryType,
      requestDictionary,
      entries = [],
      ...props
    } = this.props;
    
    return (
      <FormControl
        className={className}
        {...formControlProps}>
        <InputLabel htmlFor={name}>{label}</InputLabel>
        <MuiSelect
          {...props}
          name={name}
          onChange={e => { customOnChange(e); onChange(e); }}
          inputProps={inputProps}
          value={value}>
          {this.hasDictionaryType() ? (
            entries.map(entry => (
              <MenuItem
                key={entry.id}
                value={entry.value}>
                {entry.label}
              </MenuItem>
            ))
          ) : children}
        </MuiSelect>
      </FormControl>
    );
  }
}

export default connect(({ dictionaries }, { dictionaryType }) => {
  return {
    entries: Optional(dictionaries[dictionaryType])
      .map(entries => Object.values(entries)).or([])
  };
}, { requestDictionary })(Select);