import React from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import swal from 'sweetalert2';
import * as SignUpActions from "../../actions/SignUpActions";
import * as UserActions from "../../actions/UserActions";
import AddressForm from "../address/AddressForm";

class LocationDetailsForm extends React.Component {
  render() {
    const { history, signUp } = this.props;
    if (!signUp.success) {
      history.push('/signup/1');
      return null;
    }

    return (
      <AddressForm
        onSuccess={this.onSuccess}
        onError={this.onError}
      />
    );
  }

  onSuccess = (setAddressComplete) => {
    const { history, signUpComplete, setAuthenticated } = this.props;
    signUpComplete();
    setAddressComplete();
    setAuthenticated();
    history.push('/activity');
  };

  onError = (setAddressComplete) => {
    swal({
      title: "Something went wrong",
      text:  "Please check your details and try again or contact support.",
      type:  "error",
      confirmButtonColor: "#27b7d7",
    }).then(() => {
      swal.close();
      setAddressComplete();
    })
  };
}

const mapStateToProps = (state) => {
  return {
    address: state.address.address || {},
    signUp: state.signup || {}
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    signUpComplete: () => dispatch(SignUpActions.signUpComplete()),
    setAuthenticated: () => dispatch(UserActions.setAuthenticated(true))
  }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LocationDetailsForm));