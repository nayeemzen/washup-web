import {
  GET_POSTAL_CODE_PRICING,
  GET_POSTAL_CODE_PRICING_COMPLETE,
  GET_POSTAL_CODE_PRICING_ERROR,
  GET_POSTAL_CODE_PRICING_SUCCESS,
  GET_USER_PRICING,
  GET_USER_PRICING_COMPLETE,
  GET_USER_PRICING_ERROR,
  GET_USER_PRICING_SUCCESS
} from "./ActionTypes";

export const getUserPricing = () => {
  return {
    type: GET_USER_PRICING
  }
};

export const getUserPricingSuccess = (pricing) => {
  return {
    pricing: pricing,
    type: GET_USER_PRICING_SUCCESS
  }
};

export const getUserPricingError = (error) => {
  return {
    error: error,
    type: GET_USER_PRICING_ERROR
  }
};

export const getUserPricingComplete = () => {
  return {
    type: GET_USER_PRICING_COMPLETE
  }
};

export const getPostalCodePricing = (postalCode) => {
  return {
    postalCode: postalCode,
    type: GET_POSTAL_CODE_PRICING
  }
};

export const getPostalCodePricingSuccess = (pricing, postalCode) => {
  return {
    pricing: pricing,
    postalCode: postalCode,
    type: GET_POSTAL_CODE_PRICING_SUCCESS
  }
};

export const getPostalCodePricingError = (error) => {
  return {
    error: error,
    type: GET_POSTAL_CODE_PRICING_ERROR
  }
};

export const getPostalCodePricingComplete = () => {
  return {
    type: GET_POSTAL_CODE_PRICING_COMPLETE
  }
};