import {combineEpics} from 'redux-observable';
import {getProfileEpic, loginEpic} from "./UserEpic";
import {signUpEpic} from "./SignUpEpic";
import {setAddressEpic} from "./AddressEpic";
import {getOrdersEpic, placeOrderEpic} from "./OrderEpic";

export default combineEpics(
  loginEpic,
  signUpEpic,
  setAddressEpic,
  getProfileEpic,
  placeOrderEpic,
  getOrdersEpic
);