import {
  GET_ORDERS,
  GET_ORDERS_ERROR,
  GET_ORDERS_SUCCESS,
  PLACE_ORDER,
  PLACE_ORDER_COMPLETE,
  PLACE_ORDER_ERROR,
  PLACE_ORDER_SUCCESS
} from "./ActionTypes";

export const placeOrder = (order) => {
  return {
    type: PLACE_ORDER,
    order: order
  };
};

export const placeOrderSuccess = (order) => {
  return {
    type: PLACE_ORDER_SUCCESS,
    order: order
  };
};

export const placeOrderError = (error) => {
  return {
    type: PLACE_ORDER_ERROR,
    error: error
  };
};

export const placeOrderComplete = () => {
  return {
    type: PLACE_ORDER_COMPLETE
  };
};

export const getOrders = () => {
  return {
    type: GET_ORDERS
  };
};

export const getOrdersSuccess = (orders) => {
  return {
    type: GET_ORDERS_SUCCESS,
    orders: orders
  };
};

export const getOrdersError = (error) => {
  return {
    type: GET_ORDERS_ERROR,
    error: error
  };
};