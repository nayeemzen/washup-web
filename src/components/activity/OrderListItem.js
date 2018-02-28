import React from 'react';
import moment from "moment";
import DryCleanSelectedSvg from '../../resources/dryclean_selected.svg';
import WashAndFoldSelectedSvg from '../../resources/washandfold_selected.svg';
import {WASH_FOLD} from "../order/OrderType";

const OrderListItem = ({ type, pickupDate, deliveryDate, status, totalCostCents}) => (
  <div className="OrderItem">
    <div className="orderItemProp orderType">
      <img
        src={ type === WASH_FOLD ? WashAndFoldSelectedSvg : DryCleanSelectedSvg}
        alt={ type }/>
      { type === WASH_FOLD ? 'Wash & Fold' : 'Dry Clean'}
    </div>
    <span className="label">Pickup</span> <div className="orderItemProp orderDate">{moment.unix(pickupDate / 1000).format('LL')}</div>
    <span className="label">Delivery</span> <div className="orderItemProp orderDate">{moment.unix(deliveryDate / 1000).format('LL')}</div>
    <span className="label">Status</span> <div className="orderItemProp orderStatus">{status || 'PENDING'}</div>
    <span className="label">Price</span> <div className="orderItemProp orderPrice">{!!totalCostCents ? 'PENDING' : totalCostCents}</div>
  </div>
);

export default OrderListItem;