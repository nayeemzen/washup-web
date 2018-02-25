import React from 'react';
import './PostalCodePricing.css';
import Header from "../header/Header";
import InputField from "../../signup/InputField";
import DefaultNavigationBar from "../navigation/DefaultNavigationBar";
import {connect} from "react-redux";
import {getPostalCodePricing, getPostalCodePricingComplete} from "../../../actions/PricingActions";
import Loading from "../../common/loading/Loading";
import Error from "../../common/error/Error";
import Pricing from "../../pricing/Pricing";
import Footer from "../footer/Footer";

class PostalCodePricing extends React.Component {
  constructor() {
    super();
    this.state = { postal_code: "" };
  }

  componentWillMount() {
    const {postalCodePricing: {postalCode = "" }} = this.props;
    this.setState({
      postal_code: postalCode
    });
  }

  render() {
    const {
      getPostalCodePricingComplete,
      postalCodePricing,
      postalCodePricing: {pricing = {}}
    } = this.props;

    if (postalCodePricing.success) {
      getPostalCodePricingComplete();
    }

    return (
      <section className="PostalCodePricing">
        <DefaultNavigationBar/>
        <Header headerText="Enter your postal code to obtain pricing" />
        <div className="PriceFinder">
          <div className="PostalCodePricingInput">
            <InputField
              name="postalCode"
              placeholder="Postal Code"
              type="text"
              icon="map-marker"
              value={this.state.postal_code}
              setValue={(postalCode) => this.setState({ postal_code: postalCode })}
            />
            <button onClick={this.getPostalCodePricing}>GET PRICING</button>
          </div>
          <Loading isLoading={!!postalCodePricing.inFlight}/>
          {
            !postalCodePricing.error
              ? <Pricing pricing={pricing}/>
              : <Error
                  imgSize="small"
                  horizontal={true}
                  visible={!!postalCodePricing.error}
                  message="Could not fetch prices. Try again later."
                />
          }
        </div>
        <Footer/>
      </section>
    );
  }

  getPostalCodePricing = () => {
    const { postalCodePricing, getPostalCodePricing } = this.props;
    if (!postalCodePricing.inFlight && this.state.postal_code.length > 0 ) {
      getPostalCodePricing(this.state);
    }
  };
}

const mapStateToProps = (state) => {
  return {
    postalCodePricing: state.pricing.postalCodePricing || {}
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    getPostalCodePricing: postalCode => dispatch(getPostalCodePricing(postalCode)),
    getPostalCodePricingComplete: () => dispatch(getPostalCodePricingComplete())
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(PostalCodePricing);