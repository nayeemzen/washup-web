import {Observable} from "rxjs";
import userService from "../services/UserService";
import {SET_ADDRESS} from "../actions/ActionTypes";
import {setAddressError, setAddressSuccess} from "../actions/AddressActions";

export const setAddressEpic = action$ =>
  action$.ofType(SET_ADDRESS)
    .switchMap(action => Observable
        .fromPromise(userService.setAddress(action.address))
        .map(() => setAddressSuccess(action.address))
        .catch(error => Observable.of(setAddressError(error))));
