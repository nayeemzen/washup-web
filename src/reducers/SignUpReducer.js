import {SIGN_UP, SIGN_UP_COMPLETE, SIGN_UP_ERROR, SIGN_UP_SUCCESS} from "../actions/ActionTypes";

export default (state = {}, action) => {
  switch (action.type) {
    case SIGN_UP:
      return Object.assign({}, state, {
        inFlight: true,
        success: false,
        error: null
      });
    case SIGN_UP_SUCCESS:
      return Object.assign({}, state, {
        inFlight: false,
        success: true,
        error: null
      });
    case SIGN_UP_ERROR:
      return Object.assign({}, state, {
        inFlight: false,
        success: false,
        error: action.error
      });
    case SIGN_UP_COMPLETE:
      return Object.assign({}, state, {
        inFlight: false,
        success: false,
        error: null,
        complete: true
      });
    default:
      return state;
  }
}