import React from 'react';
import './Pricing.css';
import isEmpty from 'lodash/isEmpty';
import Formatter from '../common/CurrencyFormatter';
import CardList from "../card/CardList";
import {NOT_AVAILABLE} from "../../utils/ServiceAvailabilityStates";
import ServiceNotAvailable from "../common/servicenotavailable/ServiceNotAvailable";

const Pricing = ({ pricing }) => {
  if (pricing.availability === NOT_AVAILABLE) {
    return <ServiceNotAvailable/>;
  }

  return (
    <div className="Pricing">
      {
        Object.keys(pricing)
        .filter(key => key === 'wash_fold' || key === 'dry_clean')
        .map((pricingCategory, idx) => {
          let categoryName = pricingCategory === 'wash_fold' ? 'WASH & FOLD' : 'DRY CLEAN';

          if (isEmpty(pricing[pricingCategory])) {
            return (
              <CardList
                key={idx}
                categoryName={categoryName}
                items={[{name: "No pricing available"}]}
              />
            );
          }

          return (
            <CardList
              key={idx}
              categoryName={categoryName}
              items={pricing[pricingCategory].map(item => toCardItem(item))}
            />
          );
        })
      }
    </div>
  );
};

const toCardItem = (item) => ({
  name: item.item
  .replace(/_/g, ' ')
  .replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()),
  value: Formatter.format(item.price_cents / 100)
});

export default Pricing;