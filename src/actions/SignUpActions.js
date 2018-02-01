import {SIGN_UP} from "./ActionTypes";

export const signUp = (personalDetails) => {
  return {
    type: SIGN_UP,
    personalDetails: personalDetails
  };
};