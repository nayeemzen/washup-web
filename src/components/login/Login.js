import React, { Component } from 'react';
import Logo from '../../resources/logo_horizontal.svg';
import './Login.css';

class Login extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="Login">
        <img className="logo" src={Logo} alt="WashUp"/>
        <input spellCheck="false" name="email" placeholder="email"/>
        <input spellCheck="false" name="password" type="password" placeholder="password"/>
        <button>LOG IN</button>
      </div>
    )
  }
}

export default Login;