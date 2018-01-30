import {GET_PROFILE, SET_AUTHENTICATED, SET_PROFILE} from "../actions/ActionTypes";
import Authenticator from "../services/Authenticator";

export default (state = {}, action) => {
  switch (action.type) {
    case SET_AUTHENTICATED:
      return Object.assign({}, state, { isAuthenticated: action.isAuthenticated });
    case SET_PROFILE:
      return Object.assign({}, state, { profile: action.profile.user });
    default:
      return Object.assign({}, state, { isAuthenticated: Authenticator.isAuthenticated() });
  }
}