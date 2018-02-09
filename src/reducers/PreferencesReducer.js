import {GET_PREFERENCES_COMPLETE, SET_PREFERENCES_COMPLETE} from "../actions/ActionTypes";

export default (state = {}, action) => {
  switch (action.type) {
    case GET_PREFERENCES_COMPLETE:
      return Object.assign({}, state, action.preferences);
    case SET_PREFERENCES_COMPLETE:
      return Object.assign({}, state, action.preferences);
    default:
      return state;
  }
};