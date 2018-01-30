export default (state = {}, action) => {
  switch (action.type) {
    case 'COMPLETE_PERSONAL_DETAILS':
      return Object.assign({}, state, { "personalDetails" : action.personalDetails });
    case 'COMPLETE_LOCATION_DETAILS':
      return Object.assign({}, state, { "locationDetails" : action.locationDetails });
    default:
      return state;
  }
}