import React from 'react';
import CardList from "../card/CardList";

const Address = ({streetAddress, apt, postalCode}) => (
  <div className="Address">
    <CardList
      categoryName="Address"
      items = {
        [
          { name: streetAddress },
          { name: `Apartment ${apt}` },
          { name: postalCode }
        ]
      }
    />
  </div>
);

export default Address;