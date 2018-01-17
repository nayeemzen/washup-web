import React, { Component } from 'react';
import Modal from 'react-modal';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import  { withRouter } from 'react-router-dom';
import moment from 'moment';

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
          <button onClick={this.createOrder} className="orderButton">PLACE ORDER</button>
        </div>
      </Modal>
    );
  }

  createOrder = () => {
    this.state.selectedOptions.forEach(option => {
      this.props.createOrder({
        type: option.type,
        name: option.name,
        date: moment(),
        status: 'Picked Up',
        price: '$34.75'
      });
    });

    this.props.history.push('/activity');
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
    createOrder: order => dispatch(OrderActions.createOrder(order))
  }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Order));