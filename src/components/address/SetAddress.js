import React, {Component} from 'react';
import Modal from 'react-modal';
import isEmptyObject from 'lodash/isEmpty';
import modalStyles from '../common/ModalStyles';
import Loading from "../common/loading/Loading";
import swal from "sweetalert2";
import {parse} from 'query-string';
import withRouter from "react-router-dom/es/withRouter";
import connect from "react-redux/es/connect/connect";
import AddressForm from "./AddressForm";
import {Link} from "react-router-dom";
import './SetAddress.css'
import CloseButton from "../common/modal/CloseButton";

class SetAddress extends Component {
  constructor() {
    super();
    this.state = {
      modalOpen: true,
    }
  }

  componentWillMount() {
    Modal.setAppElement("#root");
  }

  render() {
    const { address, address: { getAddress = {} }} = this.props;
    return (
      <Modal isOpen={this.state.modalOpen} style={modalStyles}>
        {
          (!isEmptyObject(address) && !getAddress.inFlight)
            ? this.renderForm()
            : this.renderLoading()
        }
      </Modal>
    );
  }

  renderForm = () => (
    <div className="SetAddress">
      <CloseButton/>
      <AddressForm
        onSuccess={this.onSuccess}
        onError={this.onError}
      />
    </div>
  );

  renderLoading = () => <Loading/>;

  onSuccess = (setAddressComplete) => {
    const { history,  location: { search } } = this.props;
    const queryParams = parse(search),
      nextPage = queryParams && queryParams.next,
      origin = queryParams && queryParams.origin;

    swal({
      title: "Address set successfully!",
      type: "success",
      confirmButtonColor: "#27b7d7",
      confirmButtonText: "Continue"
    }).then(() => {
      swal.close();
      setAddressComplete();
      // TODO(Zen): Refactor into a flow class.
      if (nextPage && nextPage.length > 0) {
        history.push({
          pathname: nextPage,
          search: `?next=${origin}`
        });
      } else {
        history.goBack();
      }
    });
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
    });
  };
}

const mapStateToProps = (state) => {
  return {
    address: state.address || {}
  }
};

const mapDispatchToProps = () => {
  return {};
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SetAddress));