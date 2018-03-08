import {
  GET_ORDERS,
  GET_ORDERS_ERROR,
  GET_ORDERS_SUCCESS,
  PLACE_ORDER,
  PLACE_ORDER_COMPLETE,
  PLACE_ORDER_ERROR,
  PLACE_ORDER_SUCCESS
} from "../actions/ActionTypes";

export default (state = {orders: []}, action) => {
  switch (action.type) {
    case PLACE_ORDER:
      return Object.assign({}, state, {
        placeOrder: {
          inFlight: true,
          success: null,
          error: null
        }
      });

    case PLACE_ORDER_SUCCESS:
      return Object.assign({}, state, {
        orders: [...state.orders, action.order],
        placeOrder: {
          inFlight: false,
          success: true,
          error: null
        }
      });

    case PLACE_ORDER_ERROR:
      return Object.assign({}, state, {
        placeOrder: {
          inFlight: false,
          success: false,
          error: action.error
        }
      });

    case PLACE_ORDER_COMPLETE:
      return Object.assign({}, state, {
        placeOrder: {
          inFlight: false,
          success: false,
          error: null
        }
      });

    case GET_ORDERS:
      return Object.assign({}, state, {
        getOrders: {
          inFlight: true,
          success: null,
          error: null
        }
      });

    case GET_ORDERS_SUCCESS:
      return Object.assign({}, state, {
        orders: action.orders || [],
        getOrders: {
          inFlight: false,
          success: true,
          error: null
        }
      });

    case GET_ORDERS_ERROR:
      return Object.assign({}, state, {
        getOrders: {
          inFlight: false,
          success: false,
          error: action.error
        }
      });
    default:
      return state;
  }
}