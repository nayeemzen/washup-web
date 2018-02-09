import {GET_PREFERENCES, GET_PREFERENCES_COMPLETE, SET_PREFERENCES, SET_PREFERENCES_COMPLETE} from "./ActionTypes";

export const getPreferences = () => {
  return {
    type: GET_PREFERENCES
  }
};

export const getPreferencesComplete = (preferences) => {
  return {
    type: GET_PREFERENCES_COMPLETE,
    preferences: preferences
  }
};

export const setPreferences = (preferences) => {
  return {
    type: SET_PREFERENCES,
    preferences: preferences
  }
};

export const setPreferencesComplete = (preferences) => {
  return {
    type: SET_PREFERENCES_COMPLETE,
    preferences: preferences
  }
};