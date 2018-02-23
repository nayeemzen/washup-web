import {
  GET_PROFILE, GET_PROFILE_COMPLETE, GET_PROFILE_ERROR, GET_PROFILE_SUCCESS, LOGIN, LOGIN_COMPLETE, LOGIN_ERROR,
  LOGIN_SUCCESS,
  SET_AUTHENTICATED, SET_AVAILABILITY, SET_PROFILE,
} from "../actions/ActionTypes";

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

    case GET_PROFILE:
      return Object.assign({}, state, {
        getProfile: {
          inFlight: true,
          success: false,
          error: null
        }
      });
    case GET_PROFILE_SUCCESS:
      return Object.assign({}, state, {
        profile: action.profile,
        availability: action.availability,
        getProfile: {
          inFlight: false,
          success: true,
          error: null
        }
      });
    case GET_PROFILE_ERROR:
      return Object.assign({}, state, {
        getProfile: {
          inFlight: false,
          success: true,
          error: action.error
        }
      });
    case GET_PROFILE_COMPLETE:
      return Object.assign({}, state, {
        getProfile: {
          inFlight: false,
          success: false,
          error: null
        }
      });
    case SET_PROFILE:
      return Object.assign({}, state, {
        profile: action.profile
      });
    case SET_AVAILABILITY:
      return Object.assign({}, state, {
        availability: action.availability
      });
    case SET_AUTHENTICATED:
      return Object.assign({}, state, { isAuthenticated: action.isAuthenticated });
    default:
      return state;
  }
}