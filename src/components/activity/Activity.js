import React from 'react'
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import OrderList from './OrderList';
import NoOrders from './NoOrders';
import './Activity.css'

const Activity = withRouter(({ history, orders }) => {
  return orders && orders.length ? <OrderList orders={orders}/> : <NoOrders history={history}/>
});

const mapDispatchToProps = () => { return {}};

const mapStateToProps = (state) => {
  return {
    orders: state.orders
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Activity);