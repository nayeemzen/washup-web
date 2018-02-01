import {combineEpics} from 'redux-observable';
import {getProfileEpic, loginEpic} from "./UserEpic";
import {signUpEpic} from "./SignUpEpic";
import {addressEpic} from "./AddressEpic";

export default combineEpics(
  loginEpic,
  signUpEpic,
  addressEpic,
  getProfileEpic
);