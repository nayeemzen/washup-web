import React from 'react';
import { WASH_AND_FOLD } from '../order/OrderType';
import DryCleanSelectedSvg from '../../resources/dryclean_selected.svg';
import WashAndFoldSelectedSvg from '../../resources/washandfold_selected.svg';
import './OrderList.css';

const OrderList = ({ orders }) => (
  <div className="OrderList">
    <h1>Orders</h1>
    {
      orders.map((order, idx) =>
        <div className="OrderItem" key={idx}>
          <div className="orderItemProp orderType">
            <img
              src={ order.type === WASH_AND_FOLD.type ? WashAndFoldSelectedSvg : DryCleanSelectedSvg}
              alt={ order.name}/>
            {order.name}
          </div>
          <div className="orderItemProp orderDate">{order.date.format('LL')}</div>
          <div className="orderItemProp orderStatus">{order.status}</div>
          <div className="orderItemProp orderPrice">{order.price}</div>
        </div>
      )
    }
  </div>
);

export default OrderList;