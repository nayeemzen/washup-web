import {combineEpics} from 'redux-observable';
import {loginEpic} from "./LoginEpic";

export default combineEpics(
  loginEpic,
);