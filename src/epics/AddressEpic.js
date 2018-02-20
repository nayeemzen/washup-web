import {Observable} from "rxjs";
import addressService from "../services/AddressService";
import {GET_ADDRESS, SET_ADDRESS} from "../actions/ActionTypes";
import {getAddressError, getAddressSuccess, setAddressError, setAddressSuccess} from "../actions/AddressActions";

export const setAddressEpic = action$ =>
  action$.ofType(SET_ADDRESS)
    .switchMap(action => Observable
      .fromPromise(addressService.setAddress(action.address))
      .map(() => setAddressSuccess(action.address.address))
      .catch(error => Observable.of(setAddressError(error))));

export const getAddressEpic = action$ =>
  action$.ofType(GET_ADDRESS)
    .switchMap(action => Observable
      .fromPromise(addressService.getAddress())
      .map(response => getAddressSuccess(response.address))
      .catch(error => Observable.of(getAddressError(error))));
