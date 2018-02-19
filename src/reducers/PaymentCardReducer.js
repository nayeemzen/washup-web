import {
  SET_PAYMENT_CARD
} from "../actions/ActionTypes";

export default (state = [], action) => {
  switch (action.type) {
    default:
      return {...state, orders: []};
  }
}