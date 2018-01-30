import {LOGIN} from "../actions/ActionTypes";
import {Observable} from 'rxjs';
import userService from '../services/UserService';
import {setAuthenticated} from "../actions/UserActions";

export const loginEpic = action$ =>
  action$.ofType(LOGIN)
    .map(action => action.credentials)
    .switchMap(credentials => Observable.fromPromise(userService.login(credentials)))
    .map(token => setAuthenticated(true));
