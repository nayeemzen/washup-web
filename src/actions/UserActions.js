import {GET_PROFILE, LOGIN, SET_AUTHENTICATED, SET_PROFILE} from "./ActionTypes";

export const login = (credentials) => {
  return {
    type: LOGIN,
    credentials: credentials
  }
};

export const setAuthenticated = (isAuthenticated) => {
    return {
      type: SET_AUTHENTICATED,
      isAuthenticated: isAuthenticated
    }
};

export const getProfile = () => {
  return {
    type: GET_PROFILE
  }
};

export const setProfile = (profile) => {
  return {
    type: SET_PROFILE,
    profile: profile
  }
};