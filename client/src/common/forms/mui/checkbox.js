import React from 'react';
import Checkbox from "@material-ui/core/Checkbox";
import { isStringDefined } from "../../../utils/is-defined";

export default ({
  input: { checked, name, onChange, ...restInput },
  meta,
  label,
  className,
  ...rest
}) => (
  <label className={className}>
    <Checkbox
      {...rest}
      name={name}
      color="primary"
      inputProps={restInput}
      onChange={onChange}
      checked={!!checked}/>
    {isStringDefined(label) && label}
  </label>
)
