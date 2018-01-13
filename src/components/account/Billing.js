import React from 'react';
import Card from "../card/Card";

const Billing = ({ lastFourDigits }) => (
  <div className="Billing">
    <Card header="Billing">
      <p>{preference.subtitle}</p>
    </Card>
  </div>
);

export default Billing;