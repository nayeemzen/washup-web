import React from 'react';
import Formatter from '../common/CurrencyFormatter';
import './PricingInfo.css';

const PricingInfo = ({ categoryName, items }) => (
  <div className="PricingInfo">
    <p className="categoryName">{categoryName}</p>
    <div className="PricingCard">
      <ul>
        {
          items.map(item => (
            <li>
              <div className="PricingItem">
                <p className="itemName">{item.name}</p>
                <p className="itemPrice">{Formatter.format(item.price_cents / 100)}</p>
              </div>
            </li>
          ))
        }
      </ul>
    </div>
  </div>
);

export default PricingInfo;
