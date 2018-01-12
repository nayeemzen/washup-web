import React from 'react';
import './Pricing.css';
import PricingInfo from "./PricingInfo";

const Pricing = () => (
  <div className="Pricing">
    {
      prices.map(price => <PricingInfo className="PricingInfo" categoryName={price.category.name} items={price.items}/>)
    }
  </div>
);

const prices = [
  {
    category: { name: "Dry Cleaning" },
    items: [
      { name: "Shirt-Pressed", price_cents: 295 },
      { name: "Suit 2pc", price_cents: 2289 },
    ]
  },
  {
    category: { name: "Wash & Fold" },
    items: [
      { name: "Per Pound", price_cents: 295 },
      { name: "Double Blanket", price_cents: 2289 },
    ]
  },
];

export default Pricing;