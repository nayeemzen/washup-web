import {SET_ADDRESS,} from "../actions/ActionTypes";

export default (state = {}, action) => {
  switch (action.type) {
    case SET_ADDRESS:
      return Object.assign({}, state, { "address" : action.address });
    default:
      return state;
  }
}