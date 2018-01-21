import React, { Component } from 'react';
import * as UserActions from "../../actions/UserActions";
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Logo from '../../resources/logo_horizontal.svg';
import './Login.css';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: null,
      password: null
    };
  }

  render() {
    return (
      <div className="Login">
        <img className="logo" src={Logo} alt="WashUp"/>
        <input onChange={this.onEmailInput} spellCheck="false" name="email" placeholder="email"/>
        <input onChange={this.onPasswordInput} spellCheck="false" name="password" placeholder="password" type="password" />
        <button onClick={this.logIn}>LOG IN</button>
      </div>
    )
  }

  logIn = () => {
    this.props.setAuthenticated(true);
    this.props.history.push('/activity');
  };

  onEmailInput = (e) => {
    this.setState({
      email: e.target.value
    });
  };

  onPasswordInput = (e) => {
    this.setState({
      password: e.target.value
    });
  };
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.user.isAuthenticated
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    setAuthenticated: isAuthenticated => dispatch(UserActions.setAuthenticated(isAuthenticated))
  }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));