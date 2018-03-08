import {GET_RECEIPT, GET_RECEIPT_COMPLETE, GET_RECEIPT_ERROR, GET_RECEIPT_SUCCESS} from "./ActionTypes";

export const getReceipt = (orderToken) => {
  return {
    type: GET_RECEIPT,
    orderToken: orderToken
  };
};

export const getReceiptSuccess = (orderToken, receipt) => {
  return {
    type: GET_RECEIPT_SUCCESS,
    orderToken: orderToken,
    receipt: receipt
  };
};

export const getReceiptError = (error) => {
  return {
    type: GET_RECEIPT_ERROR,
    error: error
  };
};

export const getReceiptComplete = () => {
  return {
    type: GET_RECEIPT_COMPLETE
  }
};
