import {GET_PREFERENCES, SET_PREFERENCES} from "../actions/ActionTypes";
import {Observable} from "rxjs";
import preferencesService from "../services/PreferencesService";
import {getPreferencesComplete, setPreferencesComplete} from "../actions/PreferencesActions";

export const getPreferencesEpic = action$ =>
  action$.ofType(GET_PREFERENCES)
    .switchMap(action => Observable.fromPromise(preferencesService.getPreferences()))
    .map(response => getPreferencesComplete(response.preference));

export const setPreferencesEpic = action$ =>
  action$.ofType(SET_PREFERENCES)
    .switchMap(action => Observable.fromPromise(
        preferencesService.setPreferences({ preference: action.preferences })))
    .map(response => setPreferencesComplete(response.preference));
