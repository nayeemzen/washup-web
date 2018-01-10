import React, { Component } from 'react';
import Logo from '../../resources/logo.svg';
import './SideNavigation.css';

const SideNavigation = () => (
  <div className="SideNavigation">
    <div className="header">
      <img src={Logo}/>
      <h1>JOHN DOE</h1>
    </div>
    <nav>
      <ul>
        {
          menuLinks.map(link => <li><a href={link.to}><i className={`fa fa-${link.icon}`} aria-hidden="true"/>{link.text}</a></li>)
        }
      </ul>
    </nav>
    <div className="footer">
      <button>START ORDER</button>
    </div>
  </div>
);


const menuLinks = [
  {
    text: "Activity",
    to: "#",
    icon: "history"
  },
  {
    text: "Preferences",
    to: "#",
    icon: "cog"
  },
  {
    text: "Pricing",
    to: "#",
    icon: "dollar"
  },
  {
    text: "Account",
    to: "#",
    icon: "user"
  },
  {
    text: "Contact Us",
    to: "#",
    icon: "phone"
  },
  {
    text: "Log Out",
    to: "#",
    icon: "power-off"
  },
];

export default SideNavigation;