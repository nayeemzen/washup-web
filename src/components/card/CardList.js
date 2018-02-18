import React from 'react';
import './CardList.css';

const CardList = ({ categoryName, items }) => (
  <div className="CardListWrapper">
    <p className="categoryName">{categoryName}</p>
    <div className="CardList">
      {!!items &&
        <ul>
          {
            items.map((item, idx) => (
              <li key={idx}>
                <div className="CardItem">
                  <p className="itemName">{item.name}</p>
                  <p className="itemValue">{item.value}</p>
                </div>
              </li>
            ))
          }
        </ul>
      }
    </div>
  </div>
);

export default CardList;
