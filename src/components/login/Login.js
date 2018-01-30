import React, { Component } from 'react';
import * as UserActions from "../../actions/UserActions";
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Logo from '../../resources/logo_horizontal.svg';
import './Login.css';
import userService from '../../services/UserService';

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
        <button onClick={this.login}>LOG IN</button>
      </div>
    )
  }

  login = () => {
    if (!this.state.email || !this.state.password) {
      alert("Please fill in your email and password");
      return;
    }

    this.props.login({
       email: this.state.email,
       password: this.state.password
    });
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
    login: credentials => dispatch(UserActions.login(credentials)),
    setAuthenticated: isAuthenticated => dispatch(UserActions.setAuthenticated(isAuthenticated))
  }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));