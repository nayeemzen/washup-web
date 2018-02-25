import {Observable} from "rxjs";
import {SET_PAYMENT_CARD} from "../actions/ActionTypes";
import paymentCardService from "../services/PaymentCardService";
import {setPaymentCardError, setPaymentCardSuccess} from "../actions/PaymentCardActions";
import * as Errors from "../errors/Errors";

export const setPaymentCardEpic = action$ =>
  action$.ofType(SET_PAYMENT_CARD)
    .switchMap(action => Observable.fromPromise(action.stripe.createToken())
      .flatMap(({token}) => Observable.fromPromise(paymentCardService
        .setPaymentCard(token.id)
        .then(({status}) => {
          if (status === 'SUCCESS') {
            return token.card.last4;
          }

          throw Errors.SetPaymentCardFailed();
        })))
      .map((lastFour) => setPaymentCardSuccess({ last_four: lastFour }))
      .catch(error => Observable.of(setPaymentCardError(error))));
