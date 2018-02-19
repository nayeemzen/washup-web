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
    const {profile, getProfileRequest, getProfile} = this.props;
    if (isEmpty(profile) && !getProfileRequest.inFlight) {
      getProfile();
    }
  }

  render() {
    const {history, profile, paymentCard, address, getProfileRequest, getProfileComplete,} = this.props;

    if (getProfileRequest.success) {
      getProfileComplete();
    }

    if (!isEmpty(getProfileRequest.error)) {
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

    if (getProfileRequest.inFlight) {
      return (
        <div className="Account"><Loading/></div>
      )
    }

    return (
      <div className="Account">
        <Profile
          firstName={profile.first_name}
          lastName={profile.last_name}
          email={profile.email}
          cellphone={profile.phone_number}/>
        <Address
          apt={address.apt}
          postalCode={address.postal_code}
          streetAddress={address.street_address}/>
        <Billing lastFourDigits={paymentCard.lastFour}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    address: state.address.address || {},
    profile: state.user.profile || {},
    getProfileRequest: state.user.getProfile || {},
    paymentCard: state.paymentCard || {}
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getProfile: () => dispatch(getProfile()),
    getProfileComplete: () => dispatch(getProfileComplete()),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Account));
