import {Observable} from "rxjs";
import addressService from "../services/AddressService";
import {GET_ADDRESS, SET_ADDRESS} from "../actions/ActionTypes";
import {getAddressError, getAddressSuccess, setAddressError, setAddressSuccess} from "../actions/AddressActions";
import {setAvailability, setProfile} from "../actions/UserActions";

export const setAddressEpic = action$ =>
  action$.ofType(SET_ADDRESS)
    .switchMap(action => Observable
      .fromPromise(addressService.setAddress(action.address))
      .flatMap((response) => Observable.of(
        setAddressSuccess(response.address),
        setAvailability(response.availability)))
      .catch(error => Observable.of(setAddressError(error))));

export const getAddressEpic = action$ =>
  action$.ofType(GET_ADDRESS)
    .switchMap(action => Observable
      .fromPromise(addressService.getAddress())
      .map(response => getAddressSuccess(response.address))
      .catch(error => Observable.of(getAddressError(error))));
