import React, {Component} from 'react';
import Modal from 'react-modal';
import {Link, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import modalStyles from '../common/ModalStyles';
import './PaymentCard.css';
import {StripeProvider} from 'react-stripe-elements';
import PaymentCardElements from './PaymentCardElements';

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
        first_name: firstName,
        last_name: lastName,
      }
    } = this.props;
    return (
      <Modal isOpen={this.state.modalOpen} style={modalStyles}>
        <div className="PaymentCard">
          <Link className="closeButton" to="/activity">⨉</Link>
          <h1>Credit Card</h1>
          <h3 style={{marginBottom: '40px'}}>Please add your credit card information</h3>
          <StripeProvider apiKey="pk_test_Hs1thvqATIGXy4KYXvSIx5C0">
            <PaymentCardElements firstName={firstName} lastName={lastName} />
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