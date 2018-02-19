import {GET_PROFILE, LOGIN, LOGIN_SUCCESS} from "../actions/ActionTypes";
import {Observable} from 'rxjs';
import userService from '../services/UserService';
import {getProfileError, getProfileSuccess, loginError, loginSuccess} from "../actions/UserActions";

export const loginEpic = action$ =>
  action$.ofType(LOGIN)
    .map(action => action.credentials)
    .switchMap(credentials => Observable
      .fromPromise(userService.login(credentials))
      .map(token => loginSuccess())
      .catch(error => Observable.of(loginError(error))));

export const loginSuccessEpic = action$ =>
    action$.ofType(GET_PROFILE, LOGIN_SUCCESS)
      .switchMap(action => Observable
        .fromPromise(userService.getProfile())
        .map(response => getProfileSuccess(response.user))
        .catch(error => Observable.of(getProfileError(error)))); 
