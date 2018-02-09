import { combineReducers } from 'redux';
import OrderReducer from './OrderReducer';
import UserReducer from "./UserReducer";
import AddressReducer from "./AddressReducer";
import PreferencesReducer from "./PreferencesReducer";

export default combineReducers({
  orders: OrderReducer,
  user: UserReducer,
  address: AddressReducer,
  preferences: PreferencesReducer
});