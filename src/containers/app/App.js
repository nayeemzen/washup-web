import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import SideNavigation from '../../components/navigation/SideNavigation';
import Content from '../content/Content';
import './App.css';

const App = ({ isAuthenticated }) => (
    <div className="App">
      <SideNavigation sidebarEnabled={isAuthenticated}/>
      <Content sidebarEnabled={isAuthenticated}/>
    </div>
);

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.user.isAuthenticated
  }
};

export default withRouter(connect(mapStateToProps, {})(App));
