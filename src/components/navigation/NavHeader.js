import React from 'react';
import Loading from "../common/loading/Loading";

const NavHeader = ({ logo, fullName, isNameLoading } ) => (
  <div className="header">
    <img src={logo} alt="WashUp"/>
    <Loading isLoading={isNameLoading} inverted={true}/>
    <h1>{fullName}</h1>
  </div>
);

export default NavHeader;