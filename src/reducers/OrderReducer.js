import {PLACE_ORDER, SET_ORDERS} from "../actions/ActionTypes";

export default (state = [], action) => {
  switch (action.type) {
    case PLACE_ORDER:
      return state;
    case SET_ORDERS:
      return action.orders || [];
    default:
      return state;
  }
}