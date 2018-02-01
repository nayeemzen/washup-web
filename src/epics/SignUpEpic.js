import {SIGN_UP} from "../actions/ActionTypes";
import {Observable} from "rxjs";
import userService from "../services/UserService";
import {setProfile} from "../actions/UserActions";
import history from '../history';

export const signUpEpic = action$ =>
  action$.ofType(SIGN_UP)
    .switchMap(action => Observable
      .fromPromise(userService.signUp(action.personalDetails))
      .map(() => action.personalDetails))
    .map(personalDetails => setProfile(personalDetails))
    .do(() => history.push('/signup/2'));
