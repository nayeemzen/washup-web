import React, { Component } from 'react';
import isEmpty from 'validator/lib/isEmpty';
import isEmail from 'validator/lib/isEmail';
import * as UserActions from "../../actions/UserActions";
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Logo from '../../resources/washup_horizontal_inverted.png';
import swal from 'sweetalert2';
import Spinner from '../../resources/spinner.gif';
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
    const { history, loginRequest, loginComplete, setAuthenticated } = this.props;

    if (loginRequest.inFlight) {
      swal({
        imageUrl: Spinner,
        title: "Logging in",
        text: "Hang tight!",
        showConfirmButton: false,
        allowOutsideClick: false,
        allowEscapeKey: false,
        allowEnterKey: false
      });
    }

    if (loginRequest.success) {
      swal.close();
      setAuthenticated(true);
      history.push('/activity');
      loginComplete();
    }

    if (loginRequest.error) {
      swal({
        title: loginRequest.error.response && loginRequest.error.response.status === 401
          ? "Incorrect credentials."
          : "Unable to login",
        text: loginRequest.error.response && loginRequest.error.response.status === 401
          ? "Please check your email and password are correct."
          : "Please try again. If error persists, please contact support@washup.io.",
        type:  "error",
        confirmButtonColor: "#27b7d7"
      }).then(() => {
        loginComplete();
      });
    }

    return (
      <div className="Login">
        <img className="logo" src={Logo} alt="WashUp"/>
        <input
          onChange={this.onEmailInput}
          spellCheck="false"
          name="email"
          placeholder="email"
        />
        <input
          onChange={this.onPasswordInput}
          spellCheck="false"
          name="password"
          placeholder="password"
          type="password"
        />
        <button onClick={this.login}>LOG IN</button>
      </div>
    )
  }

  login = () => {
    if (this.props.loginRequest.inFlight) {
      return;
    }

    if ((!this.state.email || isEmpty(this.state.email))
      || (!this.state.password || isEmpty(this.state.email))) {
      return swal({
        title: "Missing input",
        text: "Please fill in your email and password.",
        type: "error",
        confirmButtonColor: "#27b7d7"
      });
    }

    if (!isEmail(this.state.email)) {
      return swal({
        title: "Invalid email",
        text: "The email you entered is not a valid email address.",
        type: "error",
        confirmButtonColor: "#27b7d7"
      });
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
    isAuthenticated: state.user.isAuthenticated,
    loginRequest: state.user.login || {}
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: credentials => dispatch(UserActions.login(credentials)),
    loginComplete: () => dispatch(UserActions.loginComplete()),
    setAuthenticated: (isAuthenticated) => dispatch(UserActions.setAuthenticated(isAuthenticated))
  }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));