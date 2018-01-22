import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import * as UserActions from '../../actions/UserActions';
import Authenticator from "../../services/Authenticator";

const Logout = ({ history, logout }) => {
  Authenticator.clearAuthToken();
  logout();
  history.push('/');
  return (null);
};

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(UserActions.setAuthenticated(false))
  }
};

const mapStateToProps = () => { return {}};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Logout));