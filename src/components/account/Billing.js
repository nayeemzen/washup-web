import React from 'react';
import Card from "../card/Card";
import CardList from "../card/CardList";
import './Billing.css';

const Billing = ({ lastFourDigits }) => (
  <div className="Billing">
    <CardList categoryName="Billing" items={[{name: "Credit Card", value: lastFourDigits}]} />
    <Card><button>UPDATE CARD</button></Card>
  </div>
);

export default Billing;