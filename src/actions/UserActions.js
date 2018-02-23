import {
  GET_PROFILE, GET_PROFILE_COMPLETE, GET_PROFILE_ERROR, GET_PROFILE_SUCCESS, LOGIN, LOGIN_COMPLETE, LOGIN_ERROR,
  LOGIN_SUCCESS,
  SET_AUTHENTICATED, SET_AVAILABILITY, SET_PROFILE,
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

export const getProfileSuccess = (profile, availability) => {
  return {
    type: GET_PROFILE_SUCCESS,
    availability: availability,
    profile: profile
  }
};

export const getProfileError = (error) => {
  return {
    type: GET_PROFILE_ERROR,
    error: error
  }
};

export const getProfileComplete = () => {
  return {
    type: GET_PROFILE_COMPLETE
  }
};

export const setProfile = (profile) => {
  return {
    type: SET_PROFILE,
    profile: profile
  }
};

export const setAvailability = (availability) => {
  return {
    type: SET_AVAILABILITY,
    availability: availability
  }
};