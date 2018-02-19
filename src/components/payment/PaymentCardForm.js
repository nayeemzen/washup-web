import React, {Component} from 'react';
import swal from 'sweetalert2';
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
import {setPaymentCard, setPaymentCardComplete} from "../../actions/PaymentCardActions";
import Loading from "../common/loading/Loading";

class PaymentCardForm extends Component {
  render() {
    const {
      history,
      setPaymentCardComplete,
      paymentCard: { setPaymentCard = {}}
    } = this.props;

    if (setPaymentCard.success) {
      swal({
        type: 'success',
        title: 'Card linked successfully!',
        confirmButtonColor: "#27b7d7"
      }).then(() => {
        swal.close();
        setPaymentCardComplete();
        history.goBack();
      });
    }

    if (setPaymentCard.error) {
      swal({
        type: 'error',
        title: 'Something went wrong',
        text: 'Please check your details and try again',
        confirmButtonColor: "#27b7d7"
      }).then(() => {
        swal.close();
        setPaymentCardComplete();
      })
    }

    return (
      <form onSubmit={this.onSubmit}>
        <Loading isLoading={!!setPaymentCard.inFlight}/>
        <label>
          <CardNumberElement
            className="inputText"
            {...formInputStyles()}
          />
        </label>
        <label>
          <CardExpiryElement
            className="inputText"
            {...formInputStyles()}
          />
        </label>
        <label>
          <CardCVCElement
            className="inputText"
            {...formInputStyles()}
          />
        </label>
        <label>
          <PostalCodeElement
            className="inputText"
            {...formInputStyles()}
          />
        </label>
        <button className="saveButton">Save</button>
      </form>
    );
  }

  onSubmit = (event) => {
    const {profile, setPaymentCard, stripe} = this.props;
    event.preventDefault();
    setPaymentCard({
      createToken: () => stripe.createToken({name: profile.firstName + ' ' + profile.lastName})
    });
  }
}

const mapStateToProps = (state) => {
  return {
    profile: state.user.profile || {},
    paymentCard: state.paymentCard || {}
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    setPaymentCard: (stripe) => dispatch(setPaymentCard(stripe)),
    setPaymentCardComplete: (stripe) => dispatch(setPaymentCardComplete())
  };
};

const formInputStyles = (fontSize) => {
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(injectStripe(PaymentCardForm)));