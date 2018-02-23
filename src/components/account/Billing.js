import React from 'react';
import Card from "../card/Card";
import CardList from "../card/CardList";
import './Billing.css';
import {withRouter} from "react-router-dom";

const Billing = ({ lastFourDigits, history }) => (
  <div className="Billing">
    <CardList
      categoryName="Billing"
      items={[{name: "Credit Card", value: lastFourDigits || "Not Linked"}]}
    />
    <Card>
      <button onClick={() => history.push('/set-payment-card')}>
        {!!lastFourDigits ? `UPDATE CARD` : `ADD CARD`}
      </button>
    </Card>
  </div>
);

export default withRouter(Billing);