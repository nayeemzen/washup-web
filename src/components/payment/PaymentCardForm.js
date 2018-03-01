import React, {Component} from 'react';
import {parse} from 'query-string';
import swal from 'sweetalert2';
import {
  CardNumberElement,
  CardExpiryElement,
  CardCVCElement,
  PostalCodeElement,
  injectStripe
} from 'react-stripe-elements';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {setPaymentCard, setPaymentCardComplete} from "../../actions/PaymentCardActions";
import Loading from "../common/loading/Loading";
import {NOT_AVAILABLE} from "../../utils/ServiceAvailabilityStates";

class PaymentCardForm extends Component {
  render() {
    const {
      availability,
      history,
      location: { search },
      setPaymentCardComplete,
      paymentCard: { setPaymentCard = {}, lastFour }
    } = this.props;

    if (availability === NOT_AVAILABLE && !lastFour) {
      // TODO(zen): Refactor swals into something like a sealed class.
      swal({
        title: "We're not available in your area yet",
        text:  "But working hard to get there soon!",
        type:  "error",
        confirmButtonColor: "#27b7d7",
        confirmButtonText: "Continue"
      }).then(() => {
        history.push('/activity');
      });
    }

    let queryParams = parse(search), nextPage = queryParams && queryParams.next;

    if (setPaymentCard.success) {
      swal({
        type: 'success',
        title: 'Card linked successfully!',
        confirmButtonColor: "#27b7d7"
      }).then(() => {
        swal.close();
        setPaymentCardComplete();
        // TODO(Zen): Refactor into a flow class.
        if (nextPage && nextPage.length > 0) {
          history.push({pathname: nextPage});
        } else {
          history.goBack();
        }
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
      createToken: () => stripe.createToken({name: profile.first_name + ' ' + profile.last_name})
    });
  }
}

const mapStateToProps = (state) => {
  return {
    profile: state.user.profile || {},
    paymentCard: state.paymentCard || {},
    availability: state.user.availability
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