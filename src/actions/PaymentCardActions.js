import {
  SET_PAYMENT_CARD, GET_PAYMENT_CARD
} from "./ActionTypes";

export const setCard = (stripeCardToken) => {
  return {
    type: SET_PAYMENT_CARD,
    stripeCardToken: stripeCardToken
  }
};
