import React from 'react';
import { NavLink } from 'react-router-dom';

import { isDefined } from '../../utils/is-defined';

export default function NavBtn({to, label, Icon}) {
  return (
    <NavLink to={to} className="app-nav-button">
      {isDefined(Icon) && <Icon className="anb-icon"/>}
      <span>{label}</span>
    </NavLink>
  );
}