import { combineReducers } from 'redux';
import OrderReducer from './OrderReducer';
import UserReducer from "./UserReducer";
import AddressReducer from "./AddressReducer";

export default combineReducers({
  orders: OrderReducer,
  user: UserReducer,
  address: AddressReducer
});