import React from 'react'
import  { withRouter } from 'react-router-dom';
import { DRY_CLEAN, WASH_AND_FOLD } from '../order/OrderType';
import DryCleanSelectedSvg from '../../resources/dryclean_selected.svg';
import WashAndFoldSelectedSvg from '../../resources/washandfold_selected.svg';
import './Activity.css'

const Activity = withRouter(({ history }) => {
  if (orders && orders.length) {
    return (
      <div className="OrderList">
        <h1>Orders</h1>
        {
          orders.map((order, idx) =>
            <div className="OrderItem" key={idx}>
              <div className="orderItemProp orderType">
                <img src={ order.type === WASH_AND_FOLD ? WashAndFoldSelectedSvg : DryCleanSelectedSvg}/>
                {order.name}
              </div>
              <div className="orderItemProp orderDate">{order.date}</div>
              <div className="orderItemProp orderStatus">{order.status}</div>
              <div className="orderItemProp orderPrice">{order.price}</div>
            </div>
          )
        }
      </div>
    );
  } else {
    return (
      <div className="NoOrders">
        <p> Our cleaning experts are waiting for your first order, lets get started! </p>
        <button className="startOrderBtn" onClick={() => { history.push('/order') }}>START ORDER</button>
      </div>
    );
  }

});

const orders = [
  {
    type: WASH_AND_FOLD,
    name: 'Wash & Fold',
    date: 'Jan 7, 2018',
    status: 'Picked Up',
    price: 'Calculating...'
  },
  {
    type: DRY_CLEAN,
    name: 'Dry Clean',
    date: 'Dec 27, 2017',
    status: 'Done',
    price: '$39.72'
  }
];

export default Activity;