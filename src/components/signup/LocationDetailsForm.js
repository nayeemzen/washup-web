import React from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import * as AddressActions from "../../actions/AddressActions";
import Form from "./Form";
import InputField from "./InputField";
import * as SignUpActions from "../../actions/SignUpActions";
import Loading from "../common/loading/Loading";
import Error from "../common/error/Error";
import * as UserActions from "../../actions/UserActions";
import {parse} from "query-string";

class LocationDetailsForm extends React.Component {
  constructor(props) {
    super(props);
    const {location: {search}} = this.props;
    let queryParams = parse(search),
        postalCode = queryParams && queryParams.postalCode;

    this.state = {
      street_address: "",
      apt: "",
      postal_code: postalCode || "",
      notes: "",
    };
  }

  render() {
    const {
      history,
      signUp,
      address,
      setAddress,
      setAddressComplete,
      signUpComplete,
      setAuthenticated
    } = this.props;

    if (!signUp.success) {
      history.push('/signup/1');
      return null;
    }

    if (setAddress.success) {
      signUpComplete();
      setAddressComplete();
      setAuthenticated();
      history.push('/activity')
    }

    return (
      <Form
        header="Set your pickup location"
        subHeader="Where should we pick up and deliver your laundry?"
      >
        <Loading isLoading={!!setAddress.inFlight}/>
        <Error
          visible={!!setAddress.error}
          horizontal={true}
          imgSize="small"
          message={setAddress.error && setAddress.error.message}
        />
        <InputField
          name="streetAddress"
          placeholder="Street Address"
          icon="map-marker"
          value={address.streetAddress}
          setValue={(streetAddress) => this.setState({ street_address: streetAddress })}
        />
        <InputField
          name="apt"
          placeholder="Apt, Suite, etc (optional)"
          icon="map-marker"
          value={address.apt}
          setValue={(apt) => this.setState({ apt: apt })}
        />
        <InputField
          name="postalCode"
          placeholder="Postal code"
          icon="map-marker"
          value={address.postalCode || this.state.postal_code}
          setValue={(postalCode) => this.setState({ postal_code: postalCode })}
        />
        <button onClick={this.setAddress}>Next</button>
      </Form>
    );
  }

  setAddress = () => {
    this.props.setAddressRequest({ address: this.state });
  };
}

const mapStateToProps = (state) => {
  return {
    address: state.address.address || {},
    setAddress: state.address.setAddress || {},
    signUp: state.signup || {}
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    setAddressRequest: address => dispatch(AddressActions.setAddress(address)),
    setAddressComplete: () => dispatch(AddressActions.setAddressComplete()),
    signUpComplete: () => dispatch(SignUpActions.signUpComplete()),
    setAuthenticated: () => dispatch(UserActions.setAuthenticated(true))
  }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LocationDetailsForm));