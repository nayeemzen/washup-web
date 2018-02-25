import TypedError from "./TypedError";
import {SET_PAYMENT_CARD_FAILED, SIGNUP_FAILED, USER_ALREADY_EXISTS} from "./ErrorTypes";

export const UserAlreadyExists = () => new TypedError(USER_ALREADY_EXISTS, "User already exists.");
export const SignUpFailed = () => new TypedError(SIGNUP_FAILED, "Sign up failed, please check details and try again.");
export const SetPaymentCardFailed = () => new TypedError(SET_PAYMENT_CARD_FAILED, "Failed to set payment card.");