import {SET_LOCATION_DETAILS, SET_PERSONAL_DETAILS} from "./ActionTypes";

export const setPersonalDetails = (personalDetails) => {
  return {
    type: SET_PERSONAL_DETAILS,
    personalDetails: personalDetails
  };
};

export const setLocationDetails = (locationDetails) => {
  return {
    type: SET_LOCATION_DETAILS,
    locationDetails: locationDetails
  };
};