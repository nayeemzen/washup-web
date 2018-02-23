import React from 'react';
import './Header.css';

const Header = ({headerText}) => (
  <section className="Header">
    <div><h1>{headerText}</h1></div>
  </section>
);

export default Header;