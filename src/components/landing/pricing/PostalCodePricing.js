import React from 'react';
import './PostalCodePricing.css';
import Header from "../header/Header";
import InputField from "../../signup/InputField";
import DefaultNavigationBar from "../navigation/DefaultNavigationBar";
import {connect} from "react-redux";
import isEmpty from 'lodash/isEmpty';
import {getPostalCodePricing, getPostalCodePricingComplete} from "../../../actions/PricingActions";
import Loading from "../../common/loading/Loading";
import Error from "../../common/error/Error";
import Pricing from "../../pricing/Pricing";
import Footer from "../footer/Footer";
import ScrollToTop from "../../routes/ScrollToTop";

class PostalCodePricing extends React.Component {
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
      <section className="PostalCodePricing">
        <ScrollToTop/>
        <DefaultNavigationBar/>
        <Header headerText="Simple & Transparent Pricing" />
        <div className="PriceFinder">
          <div className="NoCommitment">
            <p>
              No contracts. No commitments. Only pay when you use our service. Free pickup & delivery right to your door.
            </p>
          </div>
          <div className="DefaultPricing">
            <h2>Pricing for Toronto</h2>
            <Pricing pricing={pricing.pricing}/>
          </div>
        </div>
        <Footer/>
      </section>
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

export default connect(mapStateToProps, mapDispatchToProps)(PostalCodePricing);
