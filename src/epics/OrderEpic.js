import {Observable} from "rxjs";
import {GET_ORDERS, PLACE_ORDER} from "../actions/ActionTypes";
import orderService from "../services/OrderService";
import {placeOrderSuccess, placeOrderError, getOrdersSuccess, getOrdersError} from "../actions/OrderActions";

export const placeOrderEpic = action$ =>
  action$.ofType(PLACE_ORDER)
    .switchMap(action => Observable
      .fromPromise(orderService.placeOrder(action.order))
      .map(response => placeOrderSuccess(action.order))
      .catch(error => Observable.of(placeOrderError(error))));

export const getOrdersEpic = action$ =>
  action$.ofType(GET_ORDERS)
    .switchMap(action => Observable
      .fromPromise(orderService.getOrders())
      .map(response => getOrdersSuccess(response.orders))
      .catch(error => Observable.of(getOrdersError(error))));

