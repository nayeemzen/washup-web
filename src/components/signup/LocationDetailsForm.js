import React from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import * as AddressActions from "../../actions/AddressActions";
import Form from "./Form";
import InputField from "./InputField";

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
          value={this.props.address.streetAddress}
          setValue={(streetAddress) => this.setState({ street_address: streetAddress })}
        />
        <InputField
          name="apt"
          placeholder="Apt, Suite, etc (optional)"
          icon="map-marker"
          value={this.props.address.apt}
          setValue={(apt) => this.setState({ apt: apt })}
        />
        <InputField
          name="postalCode"
          placeholder="Postal code"
          icon="map-marker"
          value={this.props.address.postalCode}
          setValue={(postalCode) => this.setState({ postal_code: postalCode })}
        />
        <button onClick={this.setAddress}>Next</button>
      </Form>
    );
  }

  setAddress = () => {
    this.props.setAddress({ address: this.state });
  };
}

const mapStateToProps = (state) => {
  return {
    address: state.address || {}
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    setAddress: address => dispatch(AddressActions.setAddress(address))
  }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LocationDetailsForm));