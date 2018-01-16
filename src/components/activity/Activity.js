import React from 'react'
import  { withRouter } from 'react-router-dom';
import { DRY_CLEAN, WASH_AND_FOLD } from '../order/OrderType';
import OrderList from './OrderList';
import NoOrders from './NoOrders';
import './Activity.css'

const Activity = withRouter(({ history }) =>
  orders && orders.length
    ? <OrderList orders={orders}/>
    : <NoOrders history={history}/>);

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