import { combineReducers } from 'redux';
import OrderReducer from './OrderReducer';
import UserReducer from "./UserReducer";
import SignUpReducer from "./SignUpReducer";

export default combineReducers({
  orders: OrderReducer,
  user: UserReducer,
  signup: SignUpReducer
});