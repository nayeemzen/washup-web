import {PLACE_ORDER} from "../actions/ActionTypes";

export default (state = [], action) => {
  switch (action.type) {
    case PLACE_ORDER:
      return [...state, Object.assign({}, action.order)];
    default:
      return state;
  }
}