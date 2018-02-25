import React from 'react';
import isEmpty from 'validator/lib/isEmpty';
import './CardList.css';

const CardList = ({ categoryName, items }) => (
  <div className="CardListWrapper">
    {!!categoryName && <p className="categoryName">{categoryName}</p>}
    <div className="CardList">
      {!!items &&
        <ul>
          {
            items.map((item, idx) => {
              return item.name && !isEmpty(item.name) ? (
                <li key={idx}>
                  <div className="CardItem">
                    <p className="itemName">{item.name}</p>
                    <p className="itemValue">{item.value}</p>
                  </div>
                </li>
              ) : null;
            })
          }
        </ul>
      }
    </div>
  </div>
);

export default CardList;
