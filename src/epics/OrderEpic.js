import {Observable} from "rxjs";
import {PLACE_ORDER} from "../actions/ActionTypes";
import orderService from "../services/OrderService";
import history from "../history";
import {placeOrderComplete} from "../actions/OrderActions";

export const orderEpic = action$ =>
  action$.ofType(PLACE_ORDER)
    .switchMap(action => Observable
      .fromPromise(orderService.placeOrder(action.order))
      .map(response => action.order))
    .do(() => history.push('/activity'))
    .map(order => placeOrderComplete(order));

