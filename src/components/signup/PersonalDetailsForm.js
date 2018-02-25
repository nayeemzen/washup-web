import React from 'react';
import isEmail from 'validator/lib/isEmail';
import isEmpty from 'validator/lib/isEmpty';
import isMobilePhone from 'validator/lib/isMobilePhone';
import normalizeEmail from 'validator/lib/normalizeEmail';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import * as SignUpActions from '../../actions/SignUpActions';
import Form from "./Form";
import InputField from "./InputField";
import Loading from "../common/loading/Loading";
import Error from "../common/error/Error";
import {parse} from "query-string";
import {USER_ALREADY_EXISTS} from "../../errors/ErrorTypes";

class PersonalDetailsForm extends React.Component {
  constructor(props) {
    super(props);
    const {location: {search}} = this.props;
    let queryParams = parse(search),
        email = queryParams && queryParams.email;

    this.state = {
      first_name: "",
      last_name: "",
      email: email || "",
      password: "",
      phone_number: "",
      errors: new Set()
    };
  }

  render() {
    const { signUp, history, location: {search} } = this.props;
    const displayStyles = signUp.inFlight ? { display: 'none' } : {};

    if (signUp.success) {
      let queryParams = parse(search),
          postalCode = queryParams && queryParams.postalCode;

      history.push({
        pathname: '/signup/2',
        search: (postalCode && postalCode.length > 0) ? `?postalCode=${postalCode}` : ""
      });

      return null;
    }

    return (
      <Form
        header="Create your account"
        subHeader="Tell us who you are."
      >
        <Loading isLoading={signUp.inFlight || false}/>
        <Error
          horizontal={true}
          visible={!!signUp.error}
          message={
            signUp.error &&
            signUp.error.type === USER_ALREADY_EXISTS &&
            signUp.error.message
          }
          imgSize="small"
        />
        <InputField
          name="firstName"
          placeholder="First Name"
          icon="user"
          value={this.props.personalDetails.first_name}
          valid={!this.state.errors.has('first_name')}
          setValue={(firstName) => this.setState({ first_name: firstName })}
        />
        <InputField
          name="lastName"
          placeholder="Last Name"
          icon="user"
          value={this.props.personalDetails.last_name}
          valid={!this.state.errors.has('last_name')}
          setValue={(lastName) => this.setState({ last_name: lastName })}
        />
        <InputField
          name="email"
          placeholder="Email"
          icon="envelope"
          value={this.props.personalDetails.email || this.state.email}
          valid={!this.state.errors.has('email')}
          setValue={(email) => this.setState({ email })}
        />
        <InputField
          name="password"
          placeholder="Password"
          icon="lock"
          type="password"
          value={this.props.personalDetails.password}
          valid={!this.state.errors.has('password')}
          setValue={(password) => this.setState({ password: password })}
        />
        <InputField
          name="phone"
          placeholder="Phone Number"
          icon="phone"
          value={this.props.personalDetails.phone_number}
          valid={!this.state.errors.has('phone_number')}
          setValue={(phone) => this.setState({ phone_number: phone })}
        />
        <button onClick={this.signUp} style={displayStyles}>Next</button>
      </Form>
    );
  }

  validate = () => {
    const {first_name, last_name, email, password, phone_number, errors} = this.state;

    if (isEmpty(first_name)) {
      errors.add('first_name')
    } else {
      errors.delete('first_name')
    }

    if (isEmpty(last_name)) {
      errors.add('last_name');
    } else {
      errors.delete('last_name');
    }

    if (isEmpty(email) || !isEmail(email)) {
      errors.add('email');
    } else {
      errors.delete('email');
    }

    if (isEmpty(password)) {
      errors.add('password');
    } else {
      errors.delete('password');
    }

    if (isEmpty(this.state.phone_number) || !isMobilePhone(phone_number, 'en-CA')) {
      errors.add('phone_number');
    } else {
      errors.delete('phone_number');
    }

    if (errors.size > 0) {
      this.setState({ errors });
      return false;
    }

    return true;
  };

  signUp = () => {
    if (this.validate()) {
      const {first_name, last_name, email, password, phone_number} = this.state;
      this.props.signUpRequest({
        first_name,
        last_name,
        email: normalizeEmail(email),
        password,
        phone_number
      });
    }
  };
}

const mapStateToProps = (state) => {
  return {
    personalDetails: state.user.profile || {},
    signUp: state.signup || {}
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    signUpRequest: personalDetails => dispatch(SignUpActions.signUp(personalDetails))
  }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PersonalDetailsForm));