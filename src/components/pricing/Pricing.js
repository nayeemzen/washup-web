import React from 'react';
import './Pricing.css';
import isEmpty from 'lodash/isEmpty';
import Formatter from '../common/CurrencyFormatter';
import CardList from "../card/CardList";
import {connect} from "react-redux";
import {getUserPricing, getUserPricingComplete} from "../../actions/PricingActions";
import Location from "../../resources/location.png";
import Loading from "../common/loading/Loading";
import Error from "../common/error/Error";
import Card from "../card/Card";
import {NOT_AVAILABLE, SERVICE_AVAILABLE_STATES} from "../../utils/ServiceAvailabilityStates";
import ServiceNotAvailable from "../common/servicenotavailable/ServiceNotAvailable";

class Pricing extends React.Component {
  componentDidMount() {
    const {userPricing, getUserPricing, availability} = this.props;
    if (!userPricing.inFlight && SERVICE_AVAILABLE_STATES.has(availability)) {
      getUserPricing();
    }
  }

  render() {
    const {
      address,
      availability,
      userPricing,
      userPricing: {pricing = {}},
      getUserPricingComplete
    } = this.props;

    if (userPricing.success) {
      getUserPricingComplete();
    }

    if (isEmpty(address)) {
      return (
        <div className="Pricing NotAvailable">
          <Card>
            <img className="LocationIcon" src={Location}/>
            <h1>
              You don't have an address set.
              Add an address to view pricing.
            </h1>
            <button>ADD ADDRESS</button>
          </Card>
        </div>
      );
    }

    if (availability === NOT_AVAILABLE) {
      return <ServiceNotAvailable address={address}/>;
    }

    return (
      <div className="Pricing">
        <Error
          visible={!!userPricing.error}
          message="Could not fetch prices. Try again later."
        />
        <Loading isLoading={!!userPricing.inFlight}/>
        {
          Object.keys(pricing)
          .filter(key => key === 'wash_fold' || key === 'dry_clean')
          .map((pricingCategory, idx) => {
            let categoryName = pricingCategory === 'wash_fold' ? 'WASH & FOLD' : 'DRY CLEAN';
            if (isEmpty(pricing[pricingCategory])) {
              return (
                <CardList
                  key={idx}
                  categoryName={categoryName}
                  items={[{name: "No pricing available"}]}
                />
              );
            }

            return (
              <CardList
                key={idx}
                categoryName={categoryName}
                items={pricing[pricingCategory].map(item => this.toCardItem(item))}
              />
            );
          })
        }
      </div>
    );
  }

  toCardItem = (item) => ({
    name: item.item
    .replace(/_/g, ' ')
    .replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()),
    value: Formatter.format(item.price_cents / 100)
  });
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

export default connect(mapStateToProps, mapDispatchToProps)(Pricing);