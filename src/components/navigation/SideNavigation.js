import React from 'react';
import {withRouter} from 'react-router-dom';
import NavHeader from './NavHeader';
import NavList from "./NavList";
import NavFooter from "./NavFooter";
import NavLinks from './NavLinks';
import Logo from '../../resources/logo.svg';
import './SideNavigation.css';

const SideNavigation =({history, sidebarEnabled, firstName="", lastName="", isNameLoading}) => {
  return sidebarEnabled ? (
      <div className="SideNavigation">
        <NavHeader
          isNameLoading={isNameLoading}
          logo={Logo}
          fullName={`${firstName} ${lastName}`}
        />
        <NavList links={NavLinks}/>
        <NavFooter onClick={ () => history.push('/order') }/>
      </div>
    ) : (null);
};

export default withRouter(SideNavigation);