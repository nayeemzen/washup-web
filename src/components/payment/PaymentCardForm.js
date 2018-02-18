import React, {Component} from 'react';
import {
  CardElement,
  CardNumberElement,
  CardExpiryElement,
  CardCVCElement,
  PostalCodeElement,
  StripeProvider,
  Elements,
  injectStripe
} from 'react-stripe-elements';
import {Link, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import * as PaymentCardActions from '../../actions/PaymentCardActions';

class PaymentCardForm extends Component {
  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <label>
          <CardNumberElement
            className="inputText"
            {...createOptions()}
          />
        </label>
        <label>
          <CardExpiryElement
            className="inputText"
            {...createOptions()}
          />
        </label>
        <label>
          <CardCVCElement
            className="inputText"
            {...createOptions()}
          />
        </label>
        <label>
          <PostalCodeElement
            className="inputText"
            {...createOptions()}
          />
        </label>
        <button className="saveButton">Save</button>
      </form>
    );
  }

  onSubmit = (event) => {
    const {firstName, lastName, setCard} = this.props;
    // We don't want to let default form submission happen here, which would refresh the page.
    event.preventDefault();
    this.props.stripe.createToken({name: firstName + ` ` + lastName}).then(({token}) => {
      setCard(token.id);
    });
  }
}

const createOptions = (fontSize) => {
  return {
    style: {
      base: {
        fontSize: '1.1em',
        fontFamily: 'Montserrat, sans-serif',
        textTransform: 'uppercase'
      },
      invalid: {
        color: '#da0000',
      },
    },
  };
};

const mapStateToProps = (state) => {
  return {
    profile: state.user.profile || {}
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    setCard: stripeCardToken => dispatch(PaymentCardActions.setCard(stripeCardToken))
  }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(injectStripe(PaymentCardForm)));