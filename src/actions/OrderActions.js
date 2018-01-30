import {CREATE_ORDER} from "./ActionTypes";

export const createOrder = (order) => {
  return {
    type: CREATE_ORDER,
    order: order
  };
};