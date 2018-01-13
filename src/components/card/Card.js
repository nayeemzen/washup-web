import React from 'react';
import './Card.css';

const Card = ({header, children}) => (
  <div className="CardWrapper">
    <h1 className="header">{header}</h1>
    <div className="Card">
      { children }
    </div>
  </div>
);

export default Card;