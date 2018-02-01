import {PLACE_ORDER, PLACE_ORDER_COMPLETE} from "./ActionTypes";

export const placeOrder = (order) => {
  return {
    type: PLACE_ORDER,
    order: order
  };
};

export const placeOrderComplete = (order) => {
  return {
    type: PLACE_ORDER_COMPLETE,
    order: order
  };
};