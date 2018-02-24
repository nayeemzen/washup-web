import {combineEpics} from 'redux-observable';
import {getProfileEpic, loginEpic} from "./UserEpic";
import {signUpEpic} from "./SignUpEpic";
import {getAddressEpic, setAddressEpic} from "./AddressEpic";
import {getOrdersEpic, placeOrderEpic} from "./OrderEpic";
import {getPreferencesEpic, setPreferencesEpic} from "./PreferencesEpic";
import {setPaymentCardEpic} from "./PaymentCardEpic";
import {getPostalCodePricingEpic, getUserPricingEpic} from "./PricingEpic";

export default combineEpics(
  loginEpic,
  signUpEpic,
  getAddressEpic,
  setAddressEpic,
  getProfileEpic,
  placeOrderEpic,
  getOrdersEpic,
  getPreferencesEpic,
  setPreferencesEpic,
  setPaymentCardEpic,
  getUserPricingEpic,
  getPostalCodePricingEpic
);