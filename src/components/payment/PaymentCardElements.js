import React, {Component} from 'react';
import {Elements} from 'react-stripe-elements';
import PaymentCardForm from './PaymentCardForm';

const PaymentCardElements =({firstName="", lastName=""}) => {
  return (
    <Elements>
      <PaymentCardForm firstName={firstName} lastName={lastName} />
    </Elements>);
};

export default PaymentCardElements;