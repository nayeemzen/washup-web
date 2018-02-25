import React from 'react';
import CardList from "../card/CardList";
import Card from "../card/Card";
import './Address.css';
import withRouter from "react-router-dom/es/withRouter";

const Address = ({history, streetAddress, apt, postalCode}) => (
  <div className="Address">
    <CardList
      categoryName="Address"
      items = {
        !(streetAddress && postalCode)
          ? [{ name: "Address", value: "Not Linked"}]
          : [{ name: streetAddress }, { name: apt }, { name: postalCode }]
      }
    />
    <Card>
      <button onClick={() => history.push('/set-address')}>
        { !(streetAddress && postalCode) ? "ADD ADDRESS" : "UPDATE ADDRESS" }
      </button>
    </Card>
  </div>
);

export default withRouter(Address);
