import {
  GET_PROFILE, LOGIN, LOGIN_COMPLETE, LOGIN_ERROR, LOGIN_SUCCESS, SET_AUTHENTICATED,
  SET_PROFILE
} from "./ActionTypes";

export const login = (credentials) => {
  return {
    type: LOGIN,
    credentials: credentials
  }
};

export const loginError = (error) => {
  return {
    type: LOGIN_ERROR,
    error: error
  }
};

export const loginSuccess = () => {
  return {
    type: LOGIN_SUCCESS
  }
};

export const loginComplete = () => {
  return {
    type: LOGIN_COMPLETE
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