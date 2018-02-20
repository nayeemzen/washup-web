import React, {Component} from 'react';
import Modal from 'react-modal';
import modalStyles from '../common/ModalStyles';
import Form from "../signup/Form";
import Loading from "../common/loading/Loading";
import swal from "sweetalert2";
import InputField from "../signup/InputField";
import * as AddressActions from "../../actions/AddressActions";
import withRouter from "react-router-dom/es/withRouter";
import connect from "react-redux/es/connect/connect";

class SetAddress extends Component {
  constructor(props) {
    super(props);
    const {address: { address = {}}} = this.props;
    this.state = {
      modalOpen: true,
      street_address: address.street_address,
      apt: address.apt,
      postal_code: address.postal_code,
      notes: null,
    }
  }

  componentWillMount() {
    Modal.setAppElement("#root");
  }

  render() {
    const { history, address: { address = {}, setAddress = {}}, setAddressComplete } = this.props;

    if (setAddress.success) {
      swal({
        title: "Address set successfully!",
        type: "success"
      }).then(() => {
        swal.close();
        setAddressComplete();
        history.goBack();
      })
    }

    if (setAddress.error) {
      swal({
        title: "Something went wrong",
        text: "Please check your details and try again or contact support.",
        type: "error"
      }).then(() => {
        swal.close();
        setAddressComplete();
      })
    }

    return (
      <Modal isOpen={this.state.modalOpen} style={modalStyles}>
        <div className="SetAddress">
          <Form
            header="Set your pickup location"
            subHeader="Where should we pick up and deliver your laundry?"
          >
            <Loading isLoading={!!setAddress.inFlight}/>
            <InputField
              name="streetAddress"
              placeholder="Street Address"
              icon="map-marker"
              value={this.state.street_address}
              setValue={(streetAddress) => this.setState({ street_address: streetAddress })}
            />
            <InputField
              name="apt"
              placeholder="Apt, Suite, etc (optional)"
              icon="map-marker"
              value={this.state.apt}
              setValue={(apt) => this.setState({ apt: apt })}
            />
            <InputField
              name="postalCode"
              placeholder="Postal code"
              icon="map-marker"
              value={this.state.postal_code}
              setValue={(postalCode) => this.setState({ postal_code: postalCode })}
            />
            <button onClick={this.setAddress}>Next</button>
          </Form>
        </div>
      </Modal>
    );
  }

  setAddress = () => {
    const { address: { setAddress = {} }} = this.props;
    if (!setAddress.inFlight) {
      this.props.setAddress({
        address: {
          street_address: this.state.street_address,
          apt: this.state.apt,
          postal_code: this.state.postal_code
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
    setAddress: address => dispatch(AddressActions.setAddress(address)),
    setAddressComplete: () => dispatch(AddressActions.setAddressComplete()),
  }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SetAddress));