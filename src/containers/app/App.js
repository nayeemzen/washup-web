import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as UserActions from '../../actions/UserActions';
import userService from "../../services/UserService";
import SideNavigation from '../../components/navigation/SideNavigation';
import Content from '../content/Content';
import './App.css';

class App extends Component {
  componentDidMount() {
    userService.getProfile().then(profile => {
      this.props.setProfile(profile);
    });
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
    setProfile: (profile) => dispatch(UserActions.setProfile(profile))
  }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
