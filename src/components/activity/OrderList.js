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
      orders.map((order, idx) => {
        console.log(order);
        return (
            <OrderListItem
            key={idx}
            type={order.order_type}
            pickupDate={order.pickup_date}
            deliveryDate={order.delivery_date}
            status={order.status}
            totalCostCents={order.total_cost_cents || "0"}
          />
        );
      })
    }
  </div>
);

export default OrderList;
