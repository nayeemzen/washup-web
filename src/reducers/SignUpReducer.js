import {SET_LOCATION_DETAILS, SET_PERSONAL_DETAILS} from "../actions/ActionTypes";

export default (state = {}, action) => {
  switch (action.type) {
    case SET_PERSONAL_DETAILS:
      return Object.assign({}, state, { "personalDetails" : action.personalDetails });
    case SET_LOCATION_DETAILS:
      return Object.assign({}, state, { "locationDetails" : action.locationDetails });
    default:
      return state;
  }
}