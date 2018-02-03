import {Observable} from "rxjs";
import userService from "../services/UserService";
import history from '../history';
import {SET_ADDRESS} from "../actions/ActionTypes";
import {setAuthenticated} from "../actions/UserActions";

export const setAddressEpic = action$ =>
  action$.ofType(SET_ADDRESS)
    .switchMap(action => Observable.fromPromise(userService.setAddress(action.address)))
    .do(() => history.push('/activity'))
    .map(() => setAuthenticated(true));
