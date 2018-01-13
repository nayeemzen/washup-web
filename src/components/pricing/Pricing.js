import React from 'react';
import './Pricing.css';
import Formatter from '../common/CurrencyFormatter';
import CardList from "../card/CardList";

const Pricing = () => (
  <div className="Pricing">
    {
      prices.map(price =>
        <CardList
          categoryName={price.category.name}
          items={price.items.map(item => toCardItem(item) )}
        />)
    }
  </div>
);

let toCardItem = (item) => ({
    name: item.name,
    value: Formatter.format(item.price_cents / 100)
});

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