import React from 'react';
import NavItem from "./NavItem";


const NavList = ({ links }) => (
  <nav>
    <ul>{ links.map((link, idx) => <NavItem key={idx} link={link}/>) }</ul>
  </nav>
);

export default NavList;