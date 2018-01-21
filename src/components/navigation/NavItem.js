import React from 'react';
import { NavLink } from 'react-router-dom';

const NavItem = ({ key, link }) => (
  <li key={key}>
    <NavLink to={link.to} activeStyle={activeStyle}>
      <i className={`fa fa-${link.icon}`} aria-hidden="true"/>
      {link.text}
    </NavLink>
  </li>
);

const activeStyle = {
  border: "1px solid rgba(255,255,255, 0.47)",
  borderRadius: "50px",
  paddingTop: "10px",
  paddingBottom: "10px",
  paddingLeft: "15px",
  paddingRight: "60px",
  marginLeft: "-16px",
};

export default NavItem;