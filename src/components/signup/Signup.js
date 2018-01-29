import React, { Component } from 'react';
import Logo from '../../resources/logo_horizontal_selected.svg'
import './Signup.css'

class SignUp extends Component {
  render() {
    return (
      <div className="SignUp">
        <img src={Logo} alt="WashUp"/>
        <div className="ProgressNav">
          <div className="ProgressNavItem">
            <p>1</p>
          </div>
          <div className="ProgressNavItem disabled">
            <p>2</p>
          </div>
        </div>
        <div className="Header">
          <h1>Create your account</h1>
          <p>Tell us who you are.</p>
        </div>
        <div className="Form">
          <div className="signupInput">
            <i className="fa fa-user" aria-hidden="true"/>
            <input placeholder="First Name" name="firstName"/>
          </div>

          <div className="signupInput">
            <i className="fa fa-user" aria-hidden="true"/>
            <input spellCheck="false" placeholder="Last Name" name="lastName"/>
          </div>

          <div className="signupInput">
            <i className="fa fa-envelope" aria-hidden="true"/>
            <input spellCheck="false" placeholder="Email" name="email"/>
          </div>

          <div className="signupInput">
            <i className="fa fa-lock" aria-hidden="true"/>
            <input spellCheck="false" placeholder="Password" name="password" type="password"/>
          </div>

          <div className="signupInput">
            <i className="fa fa-phone" aria-hidden="true"/>
            <input spellCheck="false" placeholder="Phone Number" name="phoneNumber"/>
          </div>

          <button>Next</button>
        </div>
      </div>
    );
  }
}

export default SignUp;