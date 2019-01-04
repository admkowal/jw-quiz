import React from 'react';
import Button from '@material-ui/core/Button';
import { NavLink } from 'react-router-dom';

import { isDefined } from '../../utils/is-defined';

export default function NavBtn({to, label, Icon}) {
  return (
    <NavLink to={to} className="app-nav-button">
      {isDefined(Icon) && <Icon className="anb-icon"/>}
      <Button variant="contained" color="primary">{label}</Button>
    </NavLink>
  );
}