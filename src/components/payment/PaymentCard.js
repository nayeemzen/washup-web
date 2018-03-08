import React, {Component} from 'react';
import Modal from 'react-modal';
import modalStyles from '../common/ModalStyles';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import './PaymentCard.css';
import {StripeProvider} from 'react-stripe-elements';
import PaymentCardElements from './PaymentCardElements';
import configuration from "../../config/Configuration";
import CloseButton from "../common/modal/CloseButton";

class PaymentCard extends Component {
  constructor() {
    super();
    this.state = {
      modalOpen: true,
      pickupDate: null,
      deliveryDate: null,
      focusedInput: null,
      selectedOptions: []
    };
  }

  componentWillMount() {
    Modal.setAppElement('#root')
  }

  render() {
    const {
      profile: {
        first_name: first_name,
        last_name: last_name,
      }
    } = this.props;
    return (
      <Modal isOpen={this.state.modalOpen} style={modalStyles}>
        <div className="PaymentCard">
          <CloseButton/>
          <h1>Credit Card</h1>
          <h3 style={{marginBottom: '40px'}}>Please add your credit card information</h3>
          <StripeProvider apiKey={configuration.stripe_key}>
            <PaymentCardElements firstName={first_name} lastName={last_name} />
          </StripeProvider>
        </div>
      </Modal>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    profile: state.user.profile || {}
  }
};

const mapDispatchToProps = (dispatch) => {
  return {}
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PaymentCard));
