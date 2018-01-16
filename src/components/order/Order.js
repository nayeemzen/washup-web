import React, { Component } from 'react';
import Modal from 'react-modal';
import { Link } from 'react-router-dom';

import OrderTypeSelector from "./OrderTypeSelector";
import DateSelector from "./DateSelector";
import './Order.css';


class Order extends Component {
  constructor() {
    super();
    this.state = {
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
      <Modal isOpen={true} style={modalStyles}>
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
          <button className="orderButton">PLACE ORDER</button>
        </div>
      </Modal>
    );
  }

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
    console.log(option);
    this.setState((prevState) => {
      return this.isSelectedOption(option)
        ? { selectedOptions: prevState.selectedOptions.filter(o => o !== option) }
        : { selectedOptions: [...prevState.selectedOptions, option] }
    });
  };
}

const modalStyles = {
  overlay : {
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  },
  content: {
    border: "0",
    borderRadius: "0",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    top                        : '0px',
    left                       : '0px',
    right                      : '0px',
    bottom                     : '0px',
  }
};

export default Order;