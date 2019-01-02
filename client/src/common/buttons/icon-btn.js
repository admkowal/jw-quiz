import React from 'react';

export default function IconBtn({Icon, onClick, label}) {
  return (
    <div onClick={onClick} className="common-icon-button">
      <Icon className="cib-icon"/>
      <span>{label}</span>
    </div>
  );
}