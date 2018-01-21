import React from 'react';
import  { withRouter } from 'react-router-dom';
import NavHeader from './NavHeader';
import NavList from "./NavList";
import NavFooter from "./NavFooter";
import NavLinks from './NavLinks';
import Logo from '../../resources/logo.svg';
import './SideNavigation.css';

const SideNavigation = withRouter(({history, sidebarEnabled}) => {
  return sidebarEnabled ? (
      <div className="SideNavigation">
        <NavHeader logo={Logo} fullName={"John Doe"}/>
        <NavList links={NavLinks}/>
        <NavFooter onClick={ () => history.push('/order') }/>
      </div>
    ) : (null);
  }
);
export default SideNavigation;