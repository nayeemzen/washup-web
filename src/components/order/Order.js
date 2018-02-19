import React, {Component} from 'react';
import Modal from 'react-modal';
import {Link, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import swal from 'sweetalert2';
import uuidv4 from 'uuid/v4';

import * as OrderActions from '../../actions/OrderActions';
import modalStyles from '../common/ModalStyles';
import OrderTypeSelector from "./OrderTypeSelector";
import DateSelector from "./DateSelector";
import Spinner from '../../resources/spinner.gif';
import './Order.css';

class Order extends Component {
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
    const { history, placeOrderComplete, orders: { placeOrder={} }} = this.props;

    if (placeOrder.inFlight) {
      swal({
        imageUrl: Spinner,
        title: "We're placing your order.",
        text: "Hang tight!",
        showConfirmButton: false,
        allowOutsideClick: false,
        allowEscapeKey: false,
        allowEnterKey: false
      });
    }

    if (placeOrder.success) {
      swal({
        title: "Order placed successfully!",
        text:  "We will send you a reminder close to your pickup date.",
        type:  "success",
        confirmButtonColor: "#27b7d7"
      }).then(() => {
        placeOrderComplete();
        history.push('/activity');
      });
    }

    if (placeOrder.error) {
      swal({
        title: "Something went wrong!",
        text:  "We will fix it asap.",
        type:  "error",
        confirmButtonColor: "#27b7d7"
      }).then(() => {
        placeOrderComplete();
        history.push('/activity');
      });
    }

    return (
      <Modal isOpen={this.state.modalOpen} style={modalStyles}>
        <div className="Order">
          <Link className="closeButton" to="/activity">⨉</Link>
          <OrderTypeSelector
            selectOption={this.selectOption}
            selectedOptions={this.state.selectedOptions}/>
          <DateSelector
            pickupDate={this.state.pickupDate}
            deliveryDate={this.state.deliveryDate}
            selectPickupDate={this.selectPickupDate}
            selectDeliveryDate={this.selectDeliveryDate}/>
          <button onClick={this.placeOrder} className="orderButton">PLACE ORDER</button>
        </div>
      </Modal>
    );
  }

  placeOrder = () => {
    const {orders} = this.props;
    if (!orders.placeOrder || !orders.placeOrder.inFlight) {
      this.props.placeOrder({
        order_type: this.state.selectedOptions[0],
        pickup_date: this.state.pickupDate.valueOf(),
        delivery_date: this.state.deliveryDate.valueOf(),
        idempotence_token: uuidv4()
      });
    }
  };

  selectPickupDate = (date) => {
    this.setState({
      pickupDate: date
    });
  };

  selectDeliveryDate = (date) => {
    this.setState({
      deliveryDate: date
    });
  };

  isSelectedOption = (option) => {
    return this.state.selectedOptions.indexOf(option) !== -1;
  };

  selectOption = (option) => {
    this.setState((prevState) => this.isSelectedOption(option)
      ? { selectedOptions: [] }
      : { selectedOptions: [option] }
    );
  };
}

const mapStateToProps = (state) => {
  return {
    orders: state.orders
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    placeOrder: order => dispatch(OrderActions.placeOrder(order)),
    placeOrderComplete: () => dispatch(OrderActions.placeOrderComplete())
  }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Order));