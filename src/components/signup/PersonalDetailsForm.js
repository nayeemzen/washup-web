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
          value={this.props.data.firstName}
          setValue={(firstName) => this.setState({ firstName: firstName })}
        />
        <InputField
          name="lastName"
          placeholder="Last Name"
          icon="user"
          value={this.props.data.lastName}
          setValue={(lastName) => this.setState({ lastName: lastName })}
        />
        <InputField
          name="email"
          placeholder="Email"
          icon="envelope"
          value={this.props.data.email}
          setValue={(email) => this.setState({ email: email })}
        />
        <InputField
          name="password"
          placeholder="Password"
          icon="lock"
          type="password"
          value={this.props.data.password}
          setValue={(password) => this.setState({ password: password })}
        />
        <InputField
          name="phone"
          placeholder="Phone Number"
          icon="phone"
          value={this.props.data.phone}
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

const mapStateToProps = (state) => {
  return {
    data: state.signup['1'] || {}
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    completeStep: (data) => dispatch(SignUpActions.completeStep(1, data))
  }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PersonalDetailsForm));