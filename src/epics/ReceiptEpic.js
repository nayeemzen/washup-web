import {Observable} from "rxjs";
import orderService from "../services/OrderService";
import {GET_RECEIPT} from "../actions/ActionTypes";
import {getReceiptError, getReceiptSuccess} from "../actions/ReceiptActions";

export const getReceiptEpic = action$ =>
  action$.ofType(GET_RECEIPT)
  .switchMap(action => Observable.fromPromise(orderService.getReceipt(action.orderToken))
    .map(response => getReceiptSuccess(action.orderToken, response.receipt))
    .catch(error => Observable.of(getReceiptError(error))));