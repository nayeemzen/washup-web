import React from 'react';
import isEmpty from 'validator/lib/isEmpty';
import isPostalCode from 'validator/lib/isPostalCode';
import Form from "../signup/Form";
import Loading from "../common/loading/Loading";
import InputField from "../signup/InputField";
import {connect} from "react-redux";
import {parse} from "query-string";
import * as AddressActions from "../../actions/AddressActions";
import {withRouter} from "react-router-dom";

class AddressForm extends React.Component {
  constructor(props) {
    super(props);
    const { address: { address = {} }, location: {search} } = this.props;
    let queryParams = parse(search),
        postalCode = queryParams && queryParams.postalCode;

    this.state = {
      street_address: address.street_address,
      apt: address.apt,
      postal_code: address.postal_code || postalCode,
      notes: null,
      errors: new Set()
    }
  }

  render() {
    const { errors } = this.state;
    const {
      onSuccess,
      onError,
      getAddressComplete,
      setAddressComplete,
      address: { address = {}, getAddress = {}, setAddress = {} }
    } = this.props;

    if (getAddress.success) {
      getAddressComplete();
      this.setState({
        street_address: address.street_address,
        apt: address.apt,
        postal_code: address.postal_code
      });
    }

    if (setAddress.success) {
      onSuccess(setAddressComplete);
    }

    if (setAddress.error) {
      onError(setAddressComplete);
    }

    return (
      <Form
        header="Set your pickup location"
        subHeader="Where should we pick up and deliver your laundry?"
      >
        <Loading isLoading={!!setAddress.inFlight}/>
        <InputField
          name="streetAddress"
          placeholder="Street Address"
          icon="map-marker"
          value={this.state.street_address || "" }
          valid={!errors.has('street_address')}
          setValue={(streetAddress) => this.setState({ street_address: streetAddress })}
        />
        <InputField
          name="apt"
          placeholder="Apt, Suite, etc (optional)"
          icon="map-marker"
          value={this.state.apt || "" }
          setValue={(apt) => this.setState({ apt: apt })}
        />
        <InputField
          name="postalCode"
          placeholder="Postal code"
          icon="map-marker"
          value={this.state.postal_code || "" }
          valid={!errors.has('postal_code')}
          setValue={(postalCode) => this.setState({ postal_code: postalCode })}
        />
        <button onClick={this.setAddress}>Next</button>
      </Form>
    );
  }

  validate = () => {
    const { errors, street_address = "", postal_code = "" } = this.state;

    if (isEmpty(street_address)) {
      errors.add('street_address');
    } else {
      errors.delete('street_address');
    }

    if (isEmpty(postal_code) || !isPostalCode(postal_code, 'CA')) {
      errors.add('postal_code');
    } else {
      errors.delete('postal_code');
    }

    if (errors.size > 0) {
      this.setState({ errors });
      return false;
    }

    return true;
  };

  setAddress = () => {
    const { address: { setAddress = {} }} = this.props;
    const { street_address, apt, postal_code } = this.state;

    if (this.validate() && !setAddress.inFlight) {
      this.props.setAddress({
        address: {
          street_address,
          apt,
          postal_code,
        }
      });
    }
  };
}

const mapStateToProps = (state) => {
  return {
    address: state.address || {}
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    getAddressComplete: () => dispatch(AddressActions.getAddressComplete()),
    setAddress: address => dispatch(AddressActions.setAddress(address)),
    setAddressComplete: () => dispatch(AddressActions.setAddressComplete()),
  }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AddressForm));