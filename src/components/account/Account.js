import React from 'react';
import isEmpty from 'lodash/isEmpty';
import swal from 'sweetalert2';
import './Account.css';
import Billing from "./Billing";
import Profile from "./Profile";
import Password from "./Password";
import {connect} from "react-redux";
import {withRouter} from 'react-router-dom';
import {getProfile, getProfileComplete} from "../../actions/UserActions";
import {getAddress, getAddressComplete} from "../../actions/AddressActions";
import Address from "./Address";
import Loading from "../common/loading/Loading";

class Account extends React.Component {
  componentDidMount() {
    const {
      address,
      getAddressRequest,
      getAddress,
      profile,
      getProfileRequest,
      getProfile
    } = this.props;

    if (isEmpty(profile) && !getProfileRequest.inFlight) {
      getProfile();
    }

    if (isEmpty(address) && !getAddressRequest.inFlight) {
      getAddress();
    }
  }

  render() {
    const {
      history,
      address,
      profile,
      getAddressRequest,
      getProfileRequest,
      getProfileComplete,
      getAddressComplete,
    } = this.props;

    if (getAddressRequest.success) {
      getAddressComplete();
    }

    if (getProfileRequest.success) {
      getProfileComplete();
    }

    if (!isEmpty(getProfileRequest.error) || !isEmpty(getAddressRequest.error)) {
      swal({
        type: "error",
        title: "Something went wrong.",
        text: "please check back later."
      }).then(() => {
        swal.close();
        history.push('/activity');
        getProfileComplete();
        getAddressComplete();
      })
    }

    if (getProfileRequest.inFlight || getAddressRequest.inFlight) {
      return (
        <div className="Account"><Loading/></div>
      )
    }

    const {last_four} = this.props.payment_card;
    return (
      <div className="Account">
        <Profile
          firstName={profile.first_name}
          lastName={profile.last_name}
          email={profile.email}
          cellphone={profile.phone_number}/>
        <Address
          streetAddress={address.street_address}
          apt={address.apt}
          postalCode={address.postal_code}/>
        <Billing lastFourDigits={last_four}/>
        <Password/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    getProfileRequest: state.user.getProfile || {},
    address: state.address.address || {},
    getAddressRequest: state.address.getAddress || {},
    profile: state.user.profile || {},
    user: state.user.profile && state.user.profile.user,
    payment_card: state.user.profile && state.user.profile.card || {},
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getProfile: () => dispatch(getProfile()),
    getProfileComplete: () => dispatch(getProfileComplete()),
    getAddress: () => dispatch(getAddress()),
    getAddressComplete: () => dispatch(getAddressComplete())
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Account));
