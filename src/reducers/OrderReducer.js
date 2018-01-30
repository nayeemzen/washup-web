import {CREATE_ORDER} from "../actions/ActionTypes";

export default (state = [], action) => {
  switch (action.type) {
    case CREATE_ORDER:
      return [...state, Object.assign({}, action.order)];
    default:
      return state;
  }
}