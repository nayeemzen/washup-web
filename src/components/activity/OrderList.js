import React from 'react';
import './OrderList.css';
import OrderListItem from "./OrderListItem";

const OrderList = ({ orders }) => (
  <div className="OrderList">
    <div className="OrderListHeader">
      <div className="orderListHeader orderTypeHeader">Order</div>
      <div className="orderListHeader orderPickUpDateHeader">PickUp Date</div>
      <div className="orderListHeader orderDeliveryDateHeader">Delivery Date</div>
      <div className="orderListHeader orderStatusHeader">Status</div>
      <div className="orderListHeader orderPriceHeader">Price</div>
    </div>
    {
      orders.map((order, idx) =>
        <OrderListItem
          key={idx}
          type={order.type}
          pickupDate={order.pickupDate}
          dropOffDate={order.dropOffDate}
          status={order.status}
          totalCostCents={order.totalCostCents}
        />
      )
    }
  </div>
);

export default OrderList;