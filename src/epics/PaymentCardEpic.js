import {Observable} from "rxjs";
import {SET_PAYMENT_CARD, GET_PAYMENT_CARD} from "../actions/ActionTypes";
import paymentCardService from "../services/PaymentCardService";
import {getProfile} from "../actions/UserActions";
import history from '../history';

export const setPaymentCardEpic = action$ =>
  action$.ofType(SET_PAYMENT_CARD)
    .switchMap(action => Observable
      .fromPromise(paymentCardService.setPaymentCard(action.stripeCardToken))
      .do(() => history.goBack())
      .map(response => getProfile()));
