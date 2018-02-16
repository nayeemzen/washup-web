import {
  LOGIN, LOGIN_COMPLETE, LOGIN_ERROR, LOGIN_SUCCESS, SET_AUTHENTICATED,
  SET_PROFILE
} from "../actions/ActionTypes";
import Authenticator from "../services/Authenticator";

export default (state = {}, action) => {
  switch (action.type) {
    case LOGIN:
      return Object.assign({}, state, {
        login: {
          inFlight: true,
          success: false,
          error: null
        }
      });
    case LOGIN_SUCCESS:
      return Object.assign({}, state, {
        login: {
          inFlight: false,
          success: true,
          error: null
        }
      });
    case LOGIN_ERROR:
      return Object.assign({}, state, {
        login: {
          inFlight: false,
          success: false,
          error: action.error
        }
      });
    case LOGIN_COMPLETE:
      return Object.assign({}, state, {
        login: {
          inFlight: false,
          success: false,
          error: null
        }
      });
    case SET_AUTHENTICATED:
      return Object.assign({}, state, { isAuthenticated: action.isAuthenticated });
    case SET_PROFILE:
      return Object.assign({}, state, { profile: action.profile });
    default:
      return Object.assign({}, state, { isAuthenticated: Authenticator.isAuthenticated() });
  }
}