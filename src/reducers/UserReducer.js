import {SET_AUTHENTICATED, SET_PROFILE} from "../actions/ActionTypes";
import Authenticator from "../services/Authenticator";

export default (state = {}, action) => {
  switch (action.type) {
    case SET_AUTHENTICATED:
      return Object.assign({}, state, { isAuthenticated: action.isAuthenticated });
    case SET_PROFILE:
      return Object.assign({}, state, { profile: action.profile });
    default:
      return Object.assign({}, state, { isAuthenticated: Authenticator.isAuthenticated() });
  }
}