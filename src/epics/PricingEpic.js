import {Observable} from 'rxjs';
import pricingService from '../services/PricingService';
import {GET_POSTAL_CODE_PRICING, GET_USER_PRICING} from "../actions/ActionTypes";
import {
  getPostalCodePricingError, getPostalCodePricingSuccess, getUserPricingError,
  getUserPricingSuccess
} from "../actions/PricingActions";

export const getUserPricingEpic = action$ =>
  action$.ofType(GET_USER_PRICING)
    .switchMap(action => Observable
      .fromPromise(pricingService.getUserPricing())
      .map((pricing) => getUserPricingSuccess(pricing))
      .catch(error => Observable.of(getUserPricingError(error))));

export const getPostalCodePricingEpic = action$ =>
  action$.ofType(GET_POSTAL_CODE_PRICING)
    .switchMap(action => Observable
      .fromPromise(pricingService.getPostalCodePricing(action.postalCode))
      .map(pricing => getPostalCodePricingSuccess(pricing, action.postalCode.postal_code))
      .catch(error => Observable.of(getPostalCodePricingError(error))));
