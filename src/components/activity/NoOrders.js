import React from 'react'
import './NoOrders.css';

const NoOrders = ({ history }) => (
  <div className="NoOrders">
    <p> Our cleaning experts are waiting for your first order, lets get started! </p>
    <button className="startOrderBtn" onClick={() => { history.push('/order') }}>
      START ORDER
    </button>
  </div>
);

export default NoOrders;