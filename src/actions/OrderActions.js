import {GET_ORDERS, SET_ORDERS, PLACE_ORDER, PLACE_ORDER_COMPLETE} from "./ActionTypes";

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

export const getOrders = () => {
  return {
    type: GET_ORDERS
  };
};

export const setOrders = (orders) => {
  return {
    type: SET_ORDERS,
    orders: orders
  };
};