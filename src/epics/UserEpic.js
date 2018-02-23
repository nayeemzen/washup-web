import {GET_PROFILE, LOGIN, LOGIN_SUCCESS} from "../actions/ActionTypes";
import {Observable} from 'rxjs';
import userService from '../services/UserService';
import {getProfileError, getProfileSuccess, loginError, loginSuccess} from "../actions/UserActions";
import {getAddressSuccess} from "../actions/AddressActions";
import {getPaymentCardSuccess} from "../actions/PaymentCardActions";

export const loginEpic = action$ =>
  action$.ofType(LOGIN)
    .map(action => action.credentials)
    .switchMap(credentials => Observable
      .fromPromise(userService.login(credentials))
      .map(token => loginSuccess())
      .catch(error => Observable.of(loginError(error))));

export const getProfileEpic = action$ =>
    action$.ofType(GET_PROFILE, LOGIN_SUCCESS)
      .switchMap(action => Observable
        .fromPromise(userService.getProfile())
        .flatMap(response => Observable.of(
            getProfileSuccess(response.user, response.availability),
            getAddressSuccess(response.address),
            getPaymentCardSuccess(response.card))
        .catch(error => Observable.of(getProfileError(error)))));
