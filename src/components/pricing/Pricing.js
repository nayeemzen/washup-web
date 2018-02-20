import React from 'react';
import './Pricing.css';
import isEmpty from 'lodash/isEmpty';
import Formatter from '../common/CurrencyFormatter';
import CardList from "../card/CardList";
import {connect} from "react-redux";
import {getUserPricing, getUserPricingComplete} from "../../actions/PricingActions";
import Loading from "../common/loading/Loading";
import Error from "../common/error/Error";

class Pricing extends React.Component {
  componentDidMount() {
    const { userPricing, getUserPricing } = this.props;
    if (!userPricing.inFlight) {
      getUserPricing();
    }
  }

  render() {
    const { userPricing, userPricing: { pricing = {}}, getUserPricingComplete } = this.props;

    if (userPricing.success) {
      getUserPricingComplete();
    }

    return (
      <div className="Pricing">
        <Error
          visible={!!userPricing.error}
          message="Could not fetch prices. Try again later."
        />
        <Loading isLoading={!!userPricing.inFlight}/>
        {
          Object.keys(pricing).map((pricingCategory, idx) => {
            let categoryName = pricingCategory === 'wash_fold' ? 'WASH & FOLD' : 'DRY CLEAN';
            if (isEmpty(pricing[pricingCategory])) {
              return (
                <CardList
                  key={idx}
                  categoryName={categoryName}
                  items={ [{ name: "No pricing available" }] }
                />
              );
            }

            return (
              <CardList
                key={idx}
                categoryName={categoryName}
                items={pricing[pricingCategory].map(item => this.toCardItem(item) )}
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
    userPricing: state.pricing.userPricing || {}
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    getUserPricing: () => dispatch(getUserPricing()),
    getUserPricingComplete: () => dispatch(getUserPricingComplete())
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Pricing);