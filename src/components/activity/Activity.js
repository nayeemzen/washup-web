import React from 'react'
import isEmpty from 'lodash/isEmpty';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import OrderList from './OrderList';
import NoOrders from './NoOrders';
import './Activity.css'
import {getOrders} from "../../actions/OrderActions";
import Loading from "../common/loading/Loading";
import Error from "../common/error/Error";
import {NOT_AVAILABLE} from "../../utils/ServiceAvailabilityStates";
import ServiceNotAvailable from "../common/servicenotavailable/ServiceNotAvailable";

class Activity extends React.Component {
  componentDidMount() {
    const { orders: { getOrders = {} }} = this.props;
    if (!getOrders.inFlight) {
      this.props.getOrders();
    }
    const script = document.createElement("script");
    script.innerHTML = "gtag('event', 'conversion', {'send_to': 'AW-814309103/4eP6CPXm034Q772lhAM'});";
    document.head.appendChild(script);
  }

  render() {
    const { availability, address, orders: { orders, getOrders = {} } } = this.props;

    if (availability === NOT_AVAILABLE) {
      return this.renderServiceNotAvailable(address);
    }

    if (isEmpty(orders) && getOrders.inFlight) {
        return this.renderLoading();
    }

    if (!isEmpty(orders) || getOrders.success) {
        return this.renderOrders(orders);
    }

    if (getOrders.error) {
        return this.renderError(getOrders.error);
    }

    return <NoOrders history={this.props.history}/>;
  }

  renderLoading = () => <Loading/>;

  renderError = () => <Error message="Something went wrong. We'll fix it asap."/>;

  renderOrders = (orders) => orders && orders.length
    ? <OrderList orders={orders}/>
    : <NoOrders history={this.props.history}/>;

  renderServiceNotAvailable = (address) =>
    <ServiceNotAvailable address={address}/>;
}

const mapDispatchToProps = (dispatch) => {
  return {
    getOrders: () => dispatch(getOrders())
  }
};

const mapStateToProps = (state) => {
  return {
    availability: state.user.availability,
    orders: state.orders,
    address: state.address.address || {}
  }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Activity));