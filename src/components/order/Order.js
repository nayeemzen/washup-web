import React, { Component } from 'react';
import Modal from 'react-modal';
import { Link } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import Enum from '../common/Enum';

import 'react-datepicker/dist/react-datepicker.css';
import DryCleanSvg from '../../resources/dryclean.svg';
import DryCleanSelectedSvg from '../../resources/dryclean_selected.svg';
import WashAndFoldSvg from '../../resources/washandfold.svg';
import WashAndFoldSelectedSvg from '../../resources/washandfold_selected.svg';
import './Order.css';


class Order extends Component {
  constructor() {
    super();

    this.options = Enum.of([
      "DRY_CLEAN",
      "WASH_AND_FOLD",
    ]);

    this.state = {
      pickupDate: null,
      dropOffDate: null,
      focusedInput: null,
      selectedOptions: []
    };

    this.modalStyles = {
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
  }

  componentWillMount() {
    Modal.setAppElement('#root')
  }

  render() {
    return <Modal
      isOpen={ true }
      style={this.modalStyles}>
      <div className="Order">
        <Link className="closeButton" to="/activity">⨉</Link>

        <div className="OrderTypeSelector">

          <div onClick={this.selectDryClean} className={`DryClean ${(this.isSelectedOption(this.options.DRY_CLEAN) ? "selected" : "")}`}>
            <img src={`${this.isSelectedOption(this.options.DRY_CLEAN) ? DryCleanSelectedSvg : DryCleanSvg}`} alt="Dry Clean"/>
            <h1>Dry Clean</h1>
            <i className="fa fa-check-circle" aria-hidden="true"/>
          </div>


          <div onClick={this.selectWashAndFold} className={`WashAndFold ${(this.isSelectedOption(this.options.WASH_AND_FOLD) ? "selected" : "")}`}>
            <img src={`${this.isSelectedOption(this.options.WASH_AND_FOLD) ? WashAndFoldSelectedSvg : WashAndFoldSvg}`} alt="Dry Clean"/>
            <h1>Wash & Fold</h1>
            <i className="fa fa-check-circle" aria-hidden="true"/>
          </div>

        </div>

        <div className="DateSelectorWrapper">
          <div className="DateSelector">
            <DatePicker
              className="PickupDate"
              selected={this.state.pickupDate}
              onChange={this.selectPickupDate}
              placeholderText={"Pick up date"}
            />
            <i className="fa fa-calendar" aria-hidden="true"/>
          </div>
          <div className="DateSelector">
            <DatePicker
              className="DropOffDate"
              selected={this.state.dropOffDate}
              onChange={this.selectDropOffDate}
              placeholderText={"Drop off date"}
            />
            <i className="fa fa-calendar" aria-hidden="true"/>
          </div>

          <button className="orderButton">PLACE ORDER</button>
        </div>
      </div>
    </Modal>
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
    console.log(option, this.state);
    return this.state.selectedOptions.indexOf(option) !== -1;
  };

  selectWashAndFold = () => {
    this.selectOption(this.options.WASH_AND_FOLD);
  };

  selectDryClean = () => {
    this.selectOption(this.options.DRY_CLEAN);
  };

  selectOption = (option) => {
    this.setState((prevState) => {
      return this.isSelectedOption(option)
        ? { selectedOptions: prevState.selectedOptions.filter(o => o !== option) }
        : { selectedOptions: [...prevState.selectedOptions, option] }
    });
  };
}


export default Order;