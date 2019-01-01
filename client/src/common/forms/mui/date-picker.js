import React from 'react';
import DatePicker from 'material-ui-pickers/DatePicker';
import { KeyboardArrowRight, KeyboardArrowLeft } from '@material-ui/icons';
import Optional from '../../../utils/optional';

export default ({
  input: {
    value,
    onChange
  },
  ...rest
}) => 
  <DatePicker
    clearable
    invalidLabel=""
    value={value}
    leftArrowIcon={<KeyboardArrowLeft/>}
    rightArrowIcon={<KeyboardArrowRight/>}
    onChange={date => onChange(Optional(date).or(''))}
    {...rest} />
