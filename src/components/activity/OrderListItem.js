import React from 'react';
import moment from "moment";
import DryCleanSelectedSvg from '../../resources/dryclean_selected.svg';
import WashAndFoldSelectedSvg from '../../resources/washandfold_selected.svg';
import {WASH_FOLD} from "../order/OrderType";
import {withRouter} from "react-router-dom";
import {getHumanReadableStatus, PENDING} from "../../utils/StatusMaps";

const OrderListItem = ({ history, match, token, type, pickupDate, deliveryDate, status}) => {
  return (
    <div className="OrderItem" onClick={() => history.push(`${match.path}/receipt/${token}`)}>
      <div className="orderItemProp orderType">
        <img
          src={ type === WASH_FOLD ? WashAndFoldSelectedSvg : DryCleanSelectedSvg}
          alt={ type }/>
        { type === WASH_FOLD ? 'Wash & Fold' : 'Dry Clean'}
      </div>
      <div className="orderItemProp orderDate">
        {moment.unix(pickupDate / 1000).format('LL')}
      </div>

      <div className="orderItemProp orderDate">
        {moment.unix(deliveryDate / 1000).format('LL')}
      </div>

      <div className="orderItemProp orderStatus">
        {getHumanReadableStatus(status || PENDING)}
      </div>

      <div className="orderItemProp">
        <button className="receiptButton">Details</button>
      </div>
    </div>
  );
};

export default withRouter(OrderListItem);