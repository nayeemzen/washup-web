import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './DateSelector.css'

const DateSelector = ({pickupDate, deliveryDate, selectPickupDate, selectDeliveryDate }) => (
  <div className="DateSelectorWrapper">
    <DateSelectorItem
      className="PickupDate"
      selectedDate={pickupDate}
      selectDate={selectPickupDate}
      placeholder="Pick up date"/>
    <DateSelectorItem
      className="DropOffDate"
      selectedDate={deliveryDate}
      selectDate={selectDeliveryDate}
      placeholder="Drop off date"/>
  </div>
);

const DateSelectorItem = ({ className, selectedDate, selectDate, placeholder }) => (
  <div className="DateSelector">
    <DatePicker
      className={`${className} ${selectedDate && "selected"}`}
      selected={selectedDate}
      onChange={selectDate}
      placeholderText={placeholder}/>
    <i className="fa fa-calendar" aria-hidden="true"/>
  </div>
);

export default DateSelector;