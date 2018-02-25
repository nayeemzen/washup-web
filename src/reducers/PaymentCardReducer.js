import {
  GET_PAYMENT_CARD, GET_PAYMENT_CARD_COMPLETE, GET_PAYMENT_CARD_ERROR, GET_PAYMENT_CARD_SUCCESS,
  SET_PAYMENT_CARD, SET_PAYMENT_CARD_COMPLETE, SET_PAYMENT_CARD_ERROR, SET_PAYMENT_CARD_SUCCESS
} from "../actions/ActionTypes";

export default (state = {}, action) => {
  switch (action.type) {
    case SET_PAYMENT_CARD:
      return Object.assign({}, state, {
        setPaymentCard: {
          inFlight: true,
          success: false,
          error: null
        }
      });
    case SET_PAYMENT_CARD_SUCCESS:
      return Object.assign({}, state, {
        lastFour: action.card.last_four,
        setPaymentCard: {
          inFlight: false,
          success: true,
          error: null
        }
      });
    case SET_PAYMENT_CARD_ERROR:
      return Object.assign({}, state, {
        setPaymentCard: {
          inFlight: false,
          success: false,
          error: action.error
        }
      });
    case SET_PAYMENT_CARD_COMPLETE:
      return Object.assign({}, state, {
        setPaymentCard: {
          inFlight: false,
          success: false,
          error: null
        }
      });
    case GET_PAYMENT_CARD:
      return Object.assign({}, state, {
        getPaymentCard: {
          inFlight: true,
          success: false,
          error: null
        }
      });
    case GET_PAYMENT_CARD_SUCCESS:
      return Object.assign({}, state, {
        lastFour: (action.card && action.card.last_four) || null,
        getPaymentCard: {
          inFlight: false,
          success: true,
          error: null
        }
      });
    case GET_PAYMENT_CARD_ERROR:
      return Object.assign({}, state, {
        getPaymentCard: {
          inFlight: false,
          success: false,
          error: action.error
        }
      });
    case GET_PAYMENT_CARD_COMPLETE:
      return Object.assign({}, state, {
        getPaymentCard: {
          inFlight: false,
          success: false,
          error: null
        }
      });
    default:
      return state
  }
}