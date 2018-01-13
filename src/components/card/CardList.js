import React from 'react';
import './CardList.css';

const CardList = ({ categoryName, items }) => (
  <div className="CardListWrapper">
    <p className="categoryName">{categoryName}</p>
    <div className="CardList">
      <ul>
        {
          items.map(item => (
            <li>
              <div className="CardItem">
                <p className="itemName">{item.name}</p>
                <p className="itemValue">{item.value}</p>
              </div>
            </li>
          ))
        }
      </ul>
    </div>
  </div>
);

export default CardList;
