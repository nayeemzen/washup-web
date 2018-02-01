import React from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import * as SignUpActions from '../../actions/SignUpActions';
import Form from "./Form";
import InputField from "./InputField";

class PersonalDetailsForm extends React.Component {
  constructor() {
    super();
    this.state = {
      first_name: null,
      last_name: null,
      email: null,
      password: null,
      phone_number: null
    };
  }

  render() {
    return (
      <Form
        header="Create your account"
        subHeader="Tell us who you are."
      >
        <InputField
          name="firstName"
          placeholder="First Name"
          icon="user"
          value={this.props.personalDetails.first_name}
          setValue={(firstName) => this.setState({ first_name: firstName })}
        />
        <InputField
          name="lastName"
          placeholder="Last Name"
          icon="user"
          value={this.props.personalDetails.last_name}
          setValue={(lastName) => this.setState({ last_name: lastName })}
        />
        <InputField
          name="email"
          placeholder="Email"
          icon="envelope"
          value={this.props.personalDetails.email}
          setValue={(email) => this.setState({ email: email })}
        />
        <InputField
          name="password"
          placeholder="Password"
          icon="lock"
          type="password"
          value={this.props.personalDetails.password}
          setValue={(password) => this.setState({ password: password })}
        />
        <InputField
          name="phone"
          placeholder="Phone Number"
          icon="phone"
          value={this.props.personalDetails.phone_number}
          setValue={(phone) => this.setState({ phone_number: phone })}
        />
        <button onClick={this.signUp}>Next</button>
      </Form>
    );
  }

  signUp = () => {
    this.props.signUp(this.state);
  };
}

const mapStateToProps = (state) => {
  return {
    personalDetails: state.user.profile || {}
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    signUp: personalDetails => dispatch(SignUpActions.signUp(personalDetails))
  }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PersonalDetailsForm));