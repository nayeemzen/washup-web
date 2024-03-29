import {
  GET_ADDRESS,
  GET_ADDRESS_COMPLETE,
  GET_ADDRESS_ERROR,
  GET_ADDRESS_SUCCESS,
  SET_ADDRESS,
  SET_ADDRESS_COMPLETE,
  SET_ADDRESS_ERROR,
  SET_ADDRESS_SUCCESS,
} from "../actions/ActionTypes";

export default (state = {}, action) => {
  switch (action.type) {
    case SET_ADDRESS:
      return Object.assign({}, state, {
        setAddress: {
          inFlight: true,
          success: false,
          error: null
        },
      });
    case SET_ADDRESS_SUCCESS:
      return Object.assign({}, state, {
        address: action.address,
        setAddress: {
          inFlight: false,
          success: true,
          error: null,
        },
      });
    case SET_ADDRESS_ERROR:
      return Object.assign({}, state, {
        setAddress: {
          inFlight: false,
          success: false,
          error: action.error,
        },
      });
    case SET_ADDRESS_COMPLETE:
      return Object.assign({}, state, {
        setAddress: {
          inFlight: false,
          success: false,
          error: null,
          complete: true
        }
      });
    case GET_ADDRESS:
      return Object.assign({}, state, {
        getAddress: {
          inFlight: true,
          success: false,
          error: null
        },
      });
    case GET_ADDRESS_SUCCESS:
      return Object.assign({}, state, {
        address: action.address,
        getAddress: {
          inFlight: false,
          success: true,
          error: null,
        },
      });
    case GET_ADDRESS_ERROR:
      return Object.assign({}, state, {
        getAddress: {
          inFlight: false,
          success: false,
          error: action.error,
        },
      });
    case GET_ADDRESS_COMPLETE:
      return Object.assign({}, state, {
        getAddress: {
          inFlight: false,
          success: false,
          error: null,
          complete: true
        }
      });
    default:
      return state;
  }
}