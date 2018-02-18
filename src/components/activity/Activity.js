import React from 'react'
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import OrderList from './OrderList';
import NoOrders from './NoOrders';
import './Activity.css'
import {getOrders} from "../../actions/OrderActions";
import Loading from "../common/loading/Loading";
import Error from "../common/error/Error";

class Activity extends React.Component {
  componentDidMount() {
    const { orders: { orders, getOrders }} = this.props;
    if (orders.length === 0 && (!getOrders || !getOrders.inFlight)) {
      this.props.getOrders();
    }
  }

  render() {
    const { orders: { orders, getOrders } } = this.props;
    if (getOrders && getOrders.inFlight) {
        return this.renderLoading();
    }

    if (orders.length > 0 || (getOrders && getOrders.success)) {
        return this.renderOrders(orders);
    }

    if (getOrders && getOrders.error) {
        return this.renderError(getOrders.error);
    }

    return <NoOrders history={this.props.history}/>;
  }

  renderLoading = () => <Loading/>;

  renderError = () => <Error imgSize="large" message="Something went wrong. We'll fix it asap."/>;

  renderOrders = (orders) => {
    return orders && orders.length ? <OrderList orders={orders}/> : <NoOrders history={this.props.history}/>;
  }
}

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