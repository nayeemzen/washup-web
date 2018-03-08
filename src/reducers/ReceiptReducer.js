import {GET_RECEIPT, GET_RECEIPT_COMPLETE, GET_RECEIPT_ERROR, GET_RECEIPT_SUCCESS} from "../actions/ActionTypes";

export default (state = {receipts: {}}, action) => {
  switch(action.type) {
    case GET_RECEIPT:
      return Object.assign({}, state, {
        getReceipt: {
          inFlight: true,
          success: null,
          error: null
        }
      });

    case GET_RECEIPT_SUCCESS:
      return Object.assign({}, state, {
        receipts: {...state.receipts, [action.orderToken]: action.receipt },
        getReceipt: {
          inFlight: false,
          success: true,
          error: null
        }
      });

    case GET_RECEIPT_ERROR:
      return Object.assign({}, state, {
        getReceipt: {
          inFlight: false,
          success: false,
          error: action.error
        }
      });

    case GET_RECEIPT_COMPLETE:
      return Object.assign({}, state, {
        getReceipt: {
          inFlight: false,
          success: false,
          error: null
        }
      });

    default:
      return state;
  }
}