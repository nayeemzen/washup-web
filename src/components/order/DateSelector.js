import React from 'react';
import DatePicker from 'react-datepicker';
import moment from "moment";
import 'react-datepicker/dist/react-datepicker.css';
import './DateSelector.css'

const DateSelector = ({pickupDate, deliveryDate, selectPickupDate, selectDeliveryDate }) => (
  <div className="DateSelectorWrapper">
    <DateSelectorItem
      className="PickupDate"
      selectedDate={pickupDate}
      lowerBoundDate={moment()}
      selectDate={selectPickupDate}
      placeholder="Pick up date"/>
    <DateSelectorItem
      className="DropOffDate"
      selectedDate={deliveryDate}
      lowerBoundDate={((pickupDate && moment(pickupDate)) || moment()).add(1, 'days')}
      selectDate={selectDeliveryDate}
      placeholder="Drop off date"/>
  </div>
);

const DateSelectorItem = ({ className, selectedDate, lowerBoundDate, selectDate, placeholder }) => (
  <div className="DateSelector">
    <DatePicker
      className={`${className} ${selectedDate && "selected"}`}
      selected={selectedDate}
      onChange={selectDate}
      placeholderText={placeholder}
      minDate={moment(lowerBoundDate)}
      maxDate={moment(lowerBoundDate).add(3, 'months')}
    />
    <i className="fa fa-calendar" aria-hidden="true"/>
  </div>
);

export default DateSelector;