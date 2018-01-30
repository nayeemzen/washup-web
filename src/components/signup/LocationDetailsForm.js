import React from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import * as SignUpActions from '../../actions/SignUpActions';
import * as UserActions from '../../actions/UserActions';
import userService from '../../services/UserService';
import Form from "./Form";
import InputField from "./InputField";
import Authenticator from "../../services/Authenticator";

class LocationDetailsForm extends React.Component {
  constructor() {
    super();
    this.state = {
      street_address: null,
      apt: null,
      postal_code: null,
      notes: null,
    };
  }

  render() {
    return (
      <Form
        header="Set your pickup location"
        subHeader="Where should we pick up and deliver your laundry?"
      >
        <InputField
          name="streetAddress"
          placeholder="Street Address"
          icon="map-marker"
          value={this.props.locationDetails.streetAddress}
          setValue={(streetAddress) => this.setState({ street_address: streetAddress })}
        />
        <InputField
          name="apt"
          placeholder="Apt, Suite, etc (optional)"
          icon="map-marker"
          value={this.props.locationDetails.apt}
          setValue={(apt) => this.setState({ apt: apt })}
        />
        <InputField
          name="postalCode"
          placeholder="Postal code"
          icon="map-marker"
          value={this.props.locationDetails.postalCode}
          setValue={(postalCode) => this.setState({ postal_code: postalCode })}
        />
        <button onClick={this.setLocationDetails}>Next</button>
      </Form>
    );
  }

  setLocationDetails = () => {
    userService.setAddress({
      address: this.state
    }).then((address) => {
      this.props.setLocationDetails(address);
      this.props.setAuthenticated(Authenticator.isAuthenticated());
      this.props.history.push('/activity');
    }).catch(e => {
      console.error(e);
    });
  };
}

const mapStateToProps = (state) => {
  return {
    locationDetails: state.signup['locationDetails'] || {}
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    setAuthenticated: isAuthenticated =>
      dispatch(UserActions.setAuthenticated(isAuthenticated)),
    setLocationDetails: locationDetails =>
      dispatch(SignUpActions.setLocationDetails(locationDetails))
  }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LocationDetailsForm));