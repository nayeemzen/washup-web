import {Observable} from "rxjs";
import {GET_ORDERS, PLACE_ORDER} from "../actions/ActionTypes";
import orderService from "../services/OrderService";
import history from "../history";
import {placeOrderComplete, setOrders} from "../actions/OrderActions";

export const placeOrderEpic = action$ =>
  action$.ofType(PLACE_ORDER)
    .switchMap(action => Observable
      .fromPromise(orderService.placeOrder(action.order))
      .map(response => action.order))
    .do(() => history.push('/activity'))
    .map(order => placeOrderComplete(order));

export const getOrdersEpic = action$ =>
  action$.ofType(GET_ORDERS)
    .switchMap(action => Observable.fromPromise(orderService.getOrders()))
    .map(response => setOrders(response.orders));

