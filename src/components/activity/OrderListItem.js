import React from 'react';
import moment from "moment";
import DryCleanSelectedSvg from '../../resources/dryclean_selected.svg';
import WashAndFoldSelectedSvg from '../../resources/washandfold_selected.svg';
import {WASH_FOLD} from "../order/OrderType";

const OrderListItem = ({ type, pickupDate, dropOffDate, status, totalCostCents}) => (
  <div className="OrderItem">
    <div className="orderItemProp orderType">
      <img
        src={ type === WASH_FOLD ? WashAndFoldSelectedSvg : DryCleanSelectedSvg}
        alt={ type }/>
      { type === WASH_FOLD ? 'Wash & Fold' : 'Dry Clean'}
    </div>
    <div className="orderItemProp orderDate">{moment(pickupDate).format('LL')}</div>
    <div className="orderItemProp orderDate">{moment(dropOffDate).format('LL')}</div>
    <div className="orderItemProp orderStatus">{status || 'PENDING'}</div>
    <div className="orderItemProp orderPrice">{totalCostCents || 'PENDING'}</div>
  </div>
);

export default OrderListItem;