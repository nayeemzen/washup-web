import React from 'react';
import isEmpty from 'lodash/isEmpty';
import {connect} from "react-redux";
import {getPostalCodePricing, getPostalCodePricingComplete} from "../../../actions/PricingActions";
import Loading from "../../common/loading/Loading";
import Pricing from "../../pricing/Pricing";
import './DefaultPricing.css';

class DefaultPricing extends React.Component {
  componentDidMount() {
    const {pricing, getDefaultPricing} = this.props;
    if (!pricing.inFlight) {
      getDefaultPricing({ postal_code: 'M5' });
    }
  }

  render() {
    let pricing = this.props.pricing;
    if (isEmpty(pricing) || pricing.inFlight) {
      return (
        <div className="DefaultPricing">
          <Loading/>
        </div>
      );
    }

    return (
      <div className="DefaultPricing">
        <h2>Pricing for Toronto</h2>
        <h3>Free Pickup & Delivery Right To Your Door</h3>
        <Pricing pricing={pricing.pricing}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    pricing: state.pricing.postalCodePricing || {}
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    getDefaultPricing: postalCode => dispatch(getPostalCodePricing(postalCode)),
    getDefaultPricingComplete: () => dispatch(getPostalCodePricingComplete())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DefaultPricing);