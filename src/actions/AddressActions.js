import {SET_ADDRESS} from "./ActionTypes";

export const setAddress = (address) => {
  return {
    type: SET_ADDRESS,
    address: address
  };
};