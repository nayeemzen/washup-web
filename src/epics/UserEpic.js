import {GET_PROFILE, LOGIN} from "../actions/ActionTypes";
import {Observable} from 'rxjs';
import userService from '../services/UserService';
import {getProfile, setAuthenticated, setProfile} from "../actions/UserActions";

export const loginEpic = action$ =>
  action$.ofType(LOGIN)
    .map(action => action.credentials)
    .switchMap(credentials => Observable.fromPromise(userService.login(credentials)))
    .flatMap(token => Observable.of(getProfile(), setAuthenticated(true)));

export const getProfileEpic = action$ =>
    action$.ofType(GET_PROFILE)
      .switchMap(action => Observable.fromPromise(userService.getProfile()))
      .map(response => setProfile(response.user));
