import React from 'react';
import './ServiceNotAvailable.css';
import Location from '../../../resources/location.png'
import Card from "../../card/Card";

const ServiceNotAvailable = ({address}) => (
  <div className="ServiceNotAvailable">
    <div className="Pricing NotAvailable">
      <Card>
        <img className="LocationIcon" src={Location} alt="Service Not Available."/>
        <h2>{address ? address.street_address + ", " + address.postal_code : null}</h2>
        <h1>
          We're not available in your area yet
          but working hard to get there soon!
        </h1>
      </Card>
    </div>
  </div>
);

export default ServiceNotAvailable;