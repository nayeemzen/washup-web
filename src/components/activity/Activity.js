import React from 'react'
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import OrderList from './OrderList';
import NoOrders from './NoOrders';
import './Activity.css'
import {getOrders} from "../../actions/OrderActions";

class Activity extends React.Component {
  componentDidMount() {
    this.props.getOrders();
  }

  render() {
    const { history, orders } = this.props;
    return orders && orders.length ? <OrderList orders={orders}/> : <NoOrders history={history}/>
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    getOrders: () => dispatch(getOrders())
  }
};

const mapStateToProps = (state) => {
  return {
    orders: state.orders
  }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Activity));