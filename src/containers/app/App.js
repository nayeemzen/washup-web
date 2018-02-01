import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import SideNavigation from '../../components/navigation/SideNavigation';
import Content from '../content/Content';
import {getProfile} from "../../actions/UserActions";
import './App.css';

class App extends Component {
  componentDidMount() {
    const {isAuthenticated, getProfile} = this.props;
    if (isAuthenticated) {
      getProfile();
    }
  }

  render() {
    const {
      isAuthenticated,
      profile: {
        first_name: firstName,
        last_name: lastName,
      }
    } = this.props;

    return (
      <div className="App">
        <SideNavigation
          sidebarEnabled={isAuthenticated}
          firstName={firstName}
          lastName={lastName}
        />
        <Content sidebarEnabled={isAuthenticated}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.user.isAuthenticated,
    profile: state.user.profile || {}
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    getProfile: () => dispatch(getProfile())
  }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
