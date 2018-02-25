import { combineReducers } from 'redux';
import OrderReducer from './OrderReducer';
import UserReducer from "./UserReducer";
import AddressReducer from "./AddressReducer";
import PreferencesReducer from "./PreferencesReducer";
import SignUpReducer from "./SignUpReducer";
import PaymentCardReducer from "./PaymentCardReducer";
import PricingReducer from "./PricingReducer";
import {SET_AUTHENTICATED} from "../actions/ActionTypes";

const appReducer = combineReducers({
  orders: OrderReducer,
  user: UserReducer,
  address: AddressReducer,
  preferences: PreferencesReducer,
  signup: SignUpReducer,
  paymentCard: PaymentCardReducer,
  pricing: PricingReducer
});

const rootReducer = (state, action) => {
  // Reset Redux state if user logs out.
  if (action.type === SET_AUTHENTICATED && action.isAuthenticated === false) {
    state = undefined;
  }

  return appReducer(state, action);
};

export default rootReducer;