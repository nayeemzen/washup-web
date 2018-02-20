import {
  GET_POSTAL_CODE_PRICING,
  GET_POSTAL_CODE_PRICING_COMPLETE,
  GET_POSTAL_CODE_PRICING_ERROR,
  GET_POSTAL_CODE_PRICING_SUCCESS,
  GET_USER_PRICING,
  GET_USER_PRICING_COMPLETE,
  GET_USER_PRICING_ERROR,
  GET_USER_PRICING_SUCCESS
} from "../actions/ActionTypes";

export default (state = {}, action) => {
  switch (action.type) {
    case GET_USER_PRICING:
      return Object.assign({}, state, {
        userPricing: {
          ...state.userPricing,
          inFlight: true,
          success: false,
          error: null
        }
      });
    case GET_USER_PRICING_SUCCESS:
      return Object.assign({}, state, {
        userPricing: {
          ...state.userPricing,
          pricing: action.pricing,
          inFlight: false,
          success: true,
          error: null
        }
      });
    case GET_USER_PRICING_ERROR:
      return Object.assign({}, state, {
        userPricing: {
          ...state.userPricing,
          inFlight: false,
          success: false,
          error: action.error
        }
      });
    case GET_USER_PRICING_COMPLETE:
      return Object.assign({}, state, {
        userPricing: {
          ...state.userPricing,
          inFlight: false,
          success: false,
          error: null
        }
      });
    case GET_POSTAL_CODE_PRICING:
      return Object.assign({}, state, {
        postalCodePricing: {
          ...state.postalCodePricing,
          inFlight: true,
          success: false,
          error: null
        }
      });
    case GET_POSTAL_CODE_PRICING_SUCCESS:
      return Object.assign({}, state, {
        postalCodePricing: {
          ...state.postalCodePricing,
          postalCode: action.postalCode,
          pricing: action.pricing,
          inFlight: false,
          success: true,
          error: null
        }
      });
    case GET_POSTAL_CODE_PRICING_ERROR:
      return Object.assign({}, state, {
        postalCodePricing: {
          ...state.postalCodePricing,
          inFlight: false,
          success: false,
          error: action.error
        }
      });
    case GET_POSTAL_CODE_PRICING_COMPLETE:
      return Object.assign({}, state, {
        postalCodePricing: {
          ...state.postalCodePricing,
          inFlight: false,
          success: false,
          error: null
        }
      });
    default:
      return state;
  }
}