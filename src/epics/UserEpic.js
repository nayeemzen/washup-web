import {GET_PROFILE, LOGIN, LOGIN_SUCCESS} from "../actions/ActionTypes";
import {Observable} from 'rxjs';
import userService from '../services/UserService';
import {loginError, loginSuccess, setProfile} from "../actions/UserActions";

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
        .map(response => setProfile(response.user))
        .catch(error => {
          console.error(error);
          return Observable.empty;
        }));
