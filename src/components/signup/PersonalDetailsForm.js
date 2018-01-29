import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import * as SignUpActions from '../../actions/SignUpActions';
import Form from "./Form";
import InputField from "./InputField";

class PersonalDetailsForm extends React.Component {
  constructor() {
    super();
    this.state = {
      firstName: null,
      lastName: null,
      email: null,
      password: null,
      phone: null
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
          setValue={(firstName) => this.setState({ firstName: firstName })}
        />
        <InputField
          name="lastName"
          placeholder="Last Name"
          icon="user"
          setValue={(lastName) => this.setState({ lastName: lastName })}
        />
        <InputField
          name="email"
          placeholder="Email"
          icon="envelope"
          setValue={(email) => this.setState({ email: email })}
        />
        <InputField
          name="password"
          placeholder="Password"
          icon="lock"
          type="password"
          setValue={(password) => this.setState({ password: password })}
        />
        <InputField
          name="phone"
          placeholder="Phone Number"
          icon="phone"
          setValue={(phone) => this.setState({ phone: phone })}
        />
        <button onClick={this.completeStep}>Next</button>
      </Form>
    );
  }

  completeStep = () => {
    this.props.completeStep(this.state);
    this.props.history.push('/signup/2');
  };
}

const mapStateToProps = () => {
  return {}
};

const mapDispatchToProps = (dispatch) => {
  return {
    completeStep: (data) => dispatch(SignUpActions.completeStep(1, data))
  }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PersonalDetailsForm));