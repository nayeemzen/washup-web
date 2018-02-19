import {
  GET_PAYMENT_CARD,
  GET_PAYMENT_CARD_COMPLETE,
  GET_PAYMENT_CARD_ERROR,
  GET_PAYMENT_CARD_SUCCESS,
  SET_PAYMENT_CARD,
  SET_PAYMENT_CARD_COMPLETE,
  SET_PAYMENT_CARD_ERROR,
  SET_PAYMENT_CARD_SUCCESS
} from "./ActionTypes";

export const setPaymentCard = (stripe) => {
  return {
    type: SET_PAYMENT_CARD,
    stripe: stripe,
  }
};

export const setPaymentCardSuccess = (card) => {
  return {
    type: SET_PAYMENT_CARD_SUCCESS,
    card: card
  }
};

export const setPaymentCardError = (error) => {
  return {
    type: SET_PAYMENT_CARD_ERROR,
    error: error
  }
};

export const setPaymentCardComplete = (stripeCardToken) => {
  return {
    type: SET_PAYMENT_CARD_COMPLETE
  }
};

export const getPaymentCard = () => {
  return {
    type: GET_PAYMENT_CARD
  }
};

export const getPaymentCardSuccess = (card) => {
  return {
    type: GET_PAYMENT_CARD_SUCCESS,
    card: card
  }
};

export const getPaymentCardError = (error) => {
  return {
    type: GET_PAYMENT_CARD_ERROR,
    error: error
  }
};

export const getPaymentCardComplete = () => {
  return {
    type: GET_PAYMENT_CARD_COMPLETE
  }
};
