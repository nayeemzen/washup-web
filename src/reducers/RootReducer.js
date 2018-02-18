import { combineReducers } from 'redux';
import OrderReducer from './OrderReducer';
import UserReducer from "./UserReducer";
import AddressReducer from "./AddressReducer";
import PreferencesReducer from "./PreferencesReducer";
import SignUpReducer from "./SignUpReducer";

export default combineReducers({
  orders: OrderReducer,
  user: UserReducer,
  address: AddressReducer,
  preferences: PreferencesReducer,
  signup: SignUpReducer
});