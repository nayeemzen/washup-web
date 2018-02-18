import {
  GET_ADDRESS, GET_ADDRESS_COMPLETE, GET_ADDRESS_ERROR, GET_ADDRESS_SUCCESS, SET_ADDRESS, SET_ADDRESS_COMPLETE,
  SET_ADDRESS_ERROR,
  SET_ADDRESS_SUCCESS
} from "./ActionTypes";

export const setAddress = (address) => {
  return {
    type: SET_ADDRESS,
    address: address
  };
};

export const setAddressSuccess = (address) => {
  return {
    type: SET_ADDRESS_SUCCESS,
    address: address
  };
};

export const setAddressError = (error) => {
  return {
    type: SET_ADDRESS_ERROR,
    error: error
  };
};

export const setAddressComplete = () => {
  return {
    type: SET_ADDRESS_COMPLETE
  };
};

export const getAddress = () => {
  return {
    type: GET_ADDRESS
  };
};

export const getAddressSuccess = (address) => {
  return {
    type: GET_ADDRESS_SUCCESS,
    address: address
  };
};

export const getAddressError = (error) => {
  return {
    type: GET_ADDRESS_ERROR,
    error: error
  };
};

export const getAddressComplete = () => {
  return {
    type: GET_ADDRESS_COMPLETE
  };
};

