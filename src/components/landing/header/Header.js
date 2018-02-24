import React from 'react';
import './Header.css';

const Header = ({headerText}) => (
  <section className="LandingHeader">
    <div><h1>{headerText}</h1></div>
  </section>
);

export default Header;