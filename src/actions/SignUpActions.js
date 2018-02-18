import {SIGN_UP, SIGN_UP_COMPLETE, SIGN_UP_ERROR, SIGN_UP_SUCCESS} from "./ActionTypes";

export const signUp = (personalDetails) => {
  return {
    type: SIGN_UP,
    personalDetails: personalDetails
  };
};

export const signUpSuccess = () => {
  return {
    type: SIGN_UP_SUCCESS
  }
};

export const signUpError = (error) => {
  return {
    type: SIGN_UP_ERROR,
    error: error
  }
};

export const signUpComplete = () => {
  return {
    type: SIGN_UP_COMPLETE
  }
};
