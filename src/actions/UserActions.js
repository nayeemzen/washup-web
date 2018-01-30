import {SET_AUTHENTICATED, SET_PROFILE} from "./ActionTypes";

export const setAuthenticated = (isAuthenticated) => {
    return {
      type: SET_AUTHENTICATED,
      isAuthenticated: isAuthenticated
    }
};

export const setProfile = (profile) => {
  return {
    type: SET_PROFILE,
    profile: profile
  }
};