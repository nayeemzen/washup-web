import React from 'react';
import './Account.css';
import Billing from "./Billing";
import Profile from "./Profile";
import Password from "./Password";
import {connect} from "react-redux";
import {getProfile} from "../../actions/UserActions";

class Account extends React.Component {
  componentDidMount() {
    if (!this.props.profile) {
      this.props.getProfile();
    }
  }

  render() {
    const profile = this.props.profile || {
      first_name: "Full Name",
      last_name: "",
      email: "Email Address",
      phone_number: "Phone Number"
    };
    return (
      <div className="Account">
        <Profile
          firstName={profile.first_name}
          lastName={profile.last_name}
          email={profile.email}
          cellphone={profile.phone_number}/>
        <Billing lastFourDigits={8991}/>
        <Password/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    profile: state.user.profile
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getProfile: () => dispatch(getProfile())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Account);