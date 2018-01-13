import React from 'react';
import './Card.css';

const Card = ({header, children}) => (
  <div className="CardWrapper">
    <p>{header}</p>
    <div className="Card">
      { children }
    </div>
  </div>
);

export default Card;