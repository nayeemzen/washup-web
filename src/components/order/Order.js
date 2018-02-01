import React, {Component} from 'react';
import Modal from 'react-modal';
import {Link, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import uuidv4 from 'uuid/v4';

import * as OrderActions from '../../actions/OrderActions';
import modalStyles from './ModalStyles';
import OrderTypeSelector from "./OrderTypeSelector";
import DateSelector from "./DateSelector";
import './Order.css';


class Order extends Component {
  constructor() {
    super();
    this.state = {
      modalOpen: true,
      pickupDate: null,
      dropOffDate: null,
      focusedInput: null,
      selectedOptions: []
    };
  }

  componentWillMount() {
    Modal.setAppElement('#root')
  }

  render() {
    return (
      <Modal isOpen={this.state.modalOpen} style={modalStyles}>
        <div className="Order">
          <Link className="closeButton" to="/activity">⨉</Link>
          <OrderTypeSelector
            selectOption={this.selectOption}
            selectedOptions={this.state.selectedOptions}/>
          <DateSelector
            pickupDate={this.state.pickupDate}
            dropOffDate={this.state.dropOffDate}
            selectPickupDate={this.selectPickupDate}
            selectDropOffDate={this.selectDropOffDate}/>
          <button onClick={this.placeOrder} className="orderButton">PLACE ORDER</button>
        </div>
      </Modal>
    );
  }

  placeOrder = () => {
    this.props.placeOrder({
      order_type: this.state.selectedOptions[0],
      pickup_date: this.state.pickupDate.valueOf(),
      delivery_date: this.state.dropOffDate.valueOf(),
      idempotence_token: uuidv4()
    });
  };

  selectPickupDate = (date) => {
    this.setState({
      pickupDate: date
    });
  };

  selectDropOffDate = (date) => {
    this.setState({
      dropOffDate: date
    });
  };

  isSelectedOption = (option) => {
    return this.state.selectedOptions.indexOf(option) !== -1;
  };

  selectOption = (option) => {
    this.setState((prevState) => {
      return this.isSelectedOption(option)
        ? { selectedOptions: prevState.selectedOptions.filter(o => o !== option) }
        : { selectedOptions: [...prevState.selectedOptions, option] }
    });
  };
}

const mapStateToProps = (state) => {
  return {}
};

const mapDispatchToProps = (dispatch) => {
  return {
    placeOrder: order => dispatch(OrderActions.placeOrder(order))
  }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Order));