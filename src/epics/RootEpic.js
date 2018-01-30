import {combineEpics} from 'redux-observable';
import {getProfileEpic, loginEpic} from "./LoginEpic";

export default combineEpics(
  loginEpic,
  getProfileEpic
);