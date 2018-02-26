import React from 'react';
import isEmpty from 'lodash/isEmpty';
import Pricing from './Pricing';
import {connect} from "react-redux";
import {getUserPricing, getUserPricingComplete} from "../../actions/PricingActions";
import Location from "../../resources/location.png";
import Loading from "../common/loading/Loading";
import Error from "../common/error/Error";
import Card from "../card/Card";
import './UserPricing.css';
import {NOT_AVAILABLE} from "../../utils/ServiceAvailabilityStates";
import ServiceNotAvailable from "../common/servicenotavailable/ServiceNotAvailable";
import {withRouter} from "react-router-dom";

class UserPricing extends React.Component {
  componentDidMount() {
    const {userPricing, getUserPricing} = this.props;
    if (!userPricing.inFlight) {
      getUserPricing();
    }
  }

  render() {
    const {
      history,
      address,
      availability,
      userPricing,
      userPricing: {pricing = {}},
      getUserPricingComplete
    } = this.props;

    if (!!userPricing.error && !isEmpty(address)) {
      return (
        <div className="UserPricing">
          <Error
            visible={!!userPricing.error}
            message="Could not fetch prices. Try again later."
          />
        </div>
      );
    }

    if (!!userPricing.inFlight) {
       return <Loading isLoading={!!userPricing.inFlight}/>
    }

    if (userPricing.success) {
      getUserPricingComplete();
    }

    if (isEmpty(address)) {
      return (
        <div className="UserPricing NotAvailable">
          <Card>
            <img className="LocationIcon" src={Location} alt="Location Pin"/>
            <h1>You don't have an address set. Add an address to view pricing.</h1>
            <button onClick={() => { history.push('/set-address') }}>ADD ADDRESS</button>
          </Card>
        </div>
      );
    }

    if (availability === NOT_AVAILABLE) {
      return <ServiceNotAvailable address={address}/>;
    }

    return (
      <div className="UserPricing">
        <Error
          visible={!!userPricing.error}
          message="Could not fetch prices. Try again later."
        />
        <Loading isLoading={!!userPricing.inFlight}/>
        <Pricing pricing={pricing}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userPricing: state.pricing.userPricing || {},
    address: state.address.address || {},
    availability: state.user.availability,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    getUserPricing: () => dispatch(getUserPricing()),
    getUserPricingComplete: () => dispatch(getUserPricingComplete())
  }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UserPricing));