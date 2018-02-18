import {SIGN_UP} from "../actions/ActionTypes";
import {Observable} from "rxjs";
import userService from "../services/UserService";
import {signUpError, signUpSuccess} from "../actions/SignUpActions";
import {setProfile} from "../actions/UserActions";

export const signUpEpic = action$ =>
  action$.ofType(SIGN_UP)
    .switchMap(action => Observable
      .fromPromise(userService.signUp(action.personalDetails))
      .flatMap((response) => Observable.of(setProfile(action.personalDetails), signUpSuccess()))
      .catch((error) => Observable.of(signUpError(error))));

