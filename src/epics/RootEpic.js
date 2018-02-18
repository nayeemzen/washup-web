import {combineEpics} from 'redux-observable';
import {loginSuccessEpic, loginEpic} from "./UserEpic";
import {signUpEpic} from "./SignUpEpic";
import {getAddressEpic, setAddressEpic} from "./AddressEpic";
import {getOrdersEpic, placeOrderEpic} from "./OrderEpic";
import {getPreferencesEpic, setPreferencesEpic} from "./PreferencesEpic";
import {setPaymentCardEpic} from "./PaymentCardEpic";

export default combineEpics(
  loginEpic,
  signUpEpic,
  getAddressEpic,
  setAddressEpic,
  loginSuccessEpic,
  placeOrderEpic,
  getOrdersEpic,
  getPreferencesEpic,
  setPreferencesEpic,
  setPaymentCardEpic,
);