import React from 'react';
import { NavLink } from 'react-router-dom';
import  { withRouter } from 'react-router-dom';
import Logo from '../../resources/logo.svg';
import './SideNavigation.css';

const SideNavigation = withRouter(({ history }) => (
  <div className="SideNavigation">
    <div className="header">
      <img src={Logo} alt="WashUp"/>
      <h1>JOHN DOE</h1>
    </div>
    <nav>
      <ul>
        {
          menuLinks.map((link, idx) =>
            <li key={idx}>
              <NavLink
                to={link.to}
                activeStyle={{
                  border: "1px solid rgba(255,255,255, 0.47)",
                  borderRadius: "50px",
                  paddingTop: "10px",
                  paddingBottom: "10px",
                  paddingLeft: "15px",
                  paddingRight: "60px",
                  marginLeft: "-16px",
                }}>
                <i className={`fa fa-${link.icon}`} aria-hidden="true"/>
                {link.text}
              </NavLink>
            </li>
          )
        }
      </ul>
    </nav>
    <div className="footer">
      <button onClick={() => { history.push('/order') }}>START ORDER</button>
    </div>
  </div>
));


const menuLinks = [
  {
    text: "Activity",
    to: "/activity",
    icon: "history"
  },
  {
    text: "Preferences",
    to: "/preferences",
    icon: "cog"
  },
  {
    text: "Pricing",
    to: "/pricing",
    icon: "dollar"
  },
  {
    text: "Account",
    to: "/account",
    icon: "user"
  },
  {
    text: "Contact Us",
    to: "/contact",
    icon: "phone"
  },
  {
    text: "Log Out",
    to: "/logout",
    icon: "power-off"
  },
];

export default SideNavigation;