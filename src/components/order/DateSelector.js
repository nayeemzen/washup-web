import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './DateSelector.css'

const DateSelector = ({pickupDate, dropOffDate, selectPickupDate, selectDropOffDate }) => (
  <div className="DateSelectorWrapper">
    <DateSelectorItem
      className="PickupDate"
      selectedDate={pickupDate}
      selectDate={selectPickupDate}
      placeholder="Pick up date"/>
    <DateSelectorItem
      className="DropOffDate"
      selectedDate={dropOffDate}
      selectDate={selectDropOffDate}
      placeholder="Drop off date"/>
  </div>
);

const DateSelectorItem = ({ className, selectedDate, selectDate, placeholder }) => (
  <div className="DateSelector">
    <DatePicker
      className={className}
      selected={selectedDate}
      onChange={selectDate}
      placeholderText={placeholder}/>
    <i className="fa fa-calendar" aria-hidden="true"/>
  </div>
);

export default DateSelector;