import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import isEmpty from 'lodash/isEmpty';
import SideNavigation from '../../components/navigation/SideNavigation';
import Content from '../content/Content';
import {getProfile, getProfileComplete, setAuthenticated} from "../../actions/UserActions";
import './App.css';
import Authenticator from "../../services/Authenticator";
import TopBar from "../../components/navigation/TopBar";

class App extends Component {
  componentDidMount() {
    const {isAuthenticated, setAuthenticated} = this.props;
    if (!isAuthenticated && Authenticator.isAuthenticated()) {
      setAuthenticated();
    }
  }

  render() {
    const {
      isAuthenticated,
      getProfileRequest,
      getProfile,
      getProfileComplete,
      profile
    } = this.props;

    if (isAuthenticated && isEmpty(profile) && !getProfileRequest.inFlight) {
      getProfile();
    }

    if (getProfileRequest.success) {
      getProfileComplete();
    }

    return (
      <div className="App">
        <TopBar
          topBarEnabled={isAuthenticated}
          firstName={profile.first_name}
          lastName={profile.last_name}
          isLoading={!!getProfileRequest.inFlight}
        />
        <SideNavigation
          sidebarEnabled={isAuthenticated}
          firstName={profile.first_name}
          lastName={profile.last_name}
          isNameLoading={!!getProfileRequest.inFlight}
        />
        <Content sidebarEnabled={isAuthenticated}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.user.isAuthenticated,
    getProfileRequest: state.user.getProfile || {},
    profile: state.user.profile || {}
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    getProfile: () => dispatch(getProfile()),
    getProfileComplete: () => dispatch(getProfileComplete()),
    setAuthenticated: () => dispatch(setAuthenticated(true))
  }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
