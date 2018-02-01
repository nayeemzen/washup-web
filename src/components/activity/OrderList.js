import React from 'react';
import moment from "moment";
import {WASH_FOLD} from '../order/OrderType';
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
              src={ order.order_type === WASH_FOLD ? WashAndFoldSelectedSvg : DryCleanSelectedSvg}
              alt={ order.order_type }/>
            { order.order_type === WASH_FOLD ? 'Wash & Fold' : 'Dry Clean'}
          </div>
          <div className="orderItemProp orderDate">{moment(order.pickup_date).format('LL')}</div>
          <div className="orderItemProp orderStatus">{order.status || 'PENDING'}</div>
          <div className="orderItemProp orderPrice">{order.price || 'PENDING'}</div>
        </div>
      )
    }
  </div>
);

export default OrderList;