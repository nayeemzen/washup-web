import React from 'react';

const NavHeader = ({ logo, fullName } ) => (
  <div className="header">
    <img src={logo} alt="WashUp"/>
    <h1>{fullName}</h1>
  </div>
);

export default NavHeader;