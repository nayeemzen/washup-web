import React from 'react';
import './OrderList.css';
import OrderListItem from "./OrderListItem";
import {Route, withRouter} from "react-router-dom";
import Receipt from "../receipt/Receipt";

const OrderList = ({ match, orders }) => (
  <div className="OrderList">
    <Route exact path={`${match.path}/receipt/:orderToken`} component={Receipt}/>
    <div className="OrderListHeader">
      <div className="orderListHeader orderTypeHeader">Order</div>
      <div className="orderListHeader orderPickUpDateHeader">PickUp Date</div>
      <div className="orderListHeader orderDeliveryDateHeader">Delivery Date</div>
      <div className="orderListHeader orderStatusHeader">Status</div>
      <div className="orderListHeader orderStatusHeader"/>
    </div>
    {
      orders.map((order, idx) => {
        return (
            <OrderListItem
              key={idx}
              token={order.token.split("#")[1]}
              type={order.order_type}
              pickupDate={order.pickup_date}
              deliveryDate={order.delivery_date}
              status={order.status}
          />
        );
      })
    }
  </div>
);

export default withRouter(OrderList);
