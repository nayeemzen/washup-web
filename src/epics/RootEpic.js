import {combineEpics} from 'redux-observable';
import {getProfileEpic, loginEpic} from "./UserEpic";
import {signUpEpic} from "./SignUpEpic";
import {addressEpic} from "./AddressEpic";
import {orderEpic} from "./OrderEpic";

export default combineEpics(
  loginEpic,
  signUpEpic,
  addressEpic,
  getProfileEpic,
  orderEpic
);