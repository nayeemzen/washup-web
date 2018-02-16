import {combineEpics} from 'redux-observable';
import {loginSuccessEpic, loginEpic} from "./UserEpic";
import {signUpEpic} from "./SignUpEpic";
import {setAddressEpic} from "./AddressEpic";
import {getOrdersEpic, placeOrderEpic} from "./OrderEpic";
import {getPreferencesEpic, setPreferencesEpic} from "./PreferencesEpic";

export default combineEpics(
  loginEpic,
  signUpEpic,
  setAddressEpic,
  loginSuccessEpic,
  placeOrderEpic,
  getOrdersEpic,
  getPreferencesEpic,
  setPreferencesEpic
);