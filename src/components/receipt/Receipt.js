import React from 'react';
import isEmpty from 'lodash/isEmpty';
import Modal from 'react-modal';
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import './Receipt.css';
import CloseButton from "../common/modal/CloseButton";
import moment from "moment";
import * as ReceiptActions from "../../actions/ReceiptActions";
import Loading from "../common/loading/Loading";
import Error from "../common/error/Error";
import Formatter from '../../utils/CurrencyFormatter';

class Receipt extends React.Component {
  constructor(props) {
    super(props);
    const {match, orders: { orders = []}} = this.props;
    this.orderToken = match.params.orderToken;
    this.order = orders.filter(order => order.token.split("#")[1] === this.orderToken)[0];
    this.state = { modalOpen: true };
  }

  componentWillMount() {
    Modal.setAppElement("#root");
  }

  componentDidMount() {
    this.loadReceipt();
  }

  render() {
    const { getReceipt = {}, receipts = {} } = this.props.receipts;
    const receipt = receipts[`#${this.orderToken}`] || {};
    return (
      <Modal
        isOpen={this.state.modalOpen}
        className="ReceiptModal"
        overlayClassName="ReceiptOverlay"
        shouldCloseOnOverlayClick={true}
        onRequestClose={() => {
          this.props.history.push('/activity');
          this.setState({ modalOpen: false });
        }}
      >
        <div className="Receipt">
          <CloseButton/>
          <h1>Receipt</h1>
          <div className="ReceiptHeaderItem">
            <p className="label">Order Number</p>
            <p className="value">{this.orderToken}</p>
          </div>
          <p className="description">{this.orderSummary()}</p>
          {
            !getReceipt.inFlight
              ? !getReceipt.error ? this.renderReceiptBody(receipt) : <Error imgSize="small"/>
              : <Loading/>
          }
        </div>
      </Modal>
    );
  }

  renderOrderItems = (items = []) => {
    return (
      <table className="OrderItems">
        <h2>Order Items</h2>
        {
          items.length > 0 ? items.map((item, idx) => (
            <tr className="OrderItem" key={idx}>
              <td className="orderItem name">{item.item_name}</td>
              <td className="orderItem priceQuantity">
                <span className="priceCents">{Formatter.format(item.item_price_cents / 100)}</span>
                <span className="multiply">⨉</span>
                <span className="quantity">{item.item_quantity}</span>
              </td>
              <td className="orderItem totalPriceCents">{Formatter.format(item.item_total_price_cents / 100)}</td>
            </tr>
          )) : <p> Your billed items will be available here when they have been assessed.</p>
        }
      </table>
    )
  };

  renderReceiptBody = (receipt) => {
    return (
      <div className="ReceiptBodyItems">
        <div className="ReceiptBodyItem">
          <p className="label">Total Cost</p>
          <p className="value">{this.calculateTotalCost(receipt)}</p>
        </div>
        <div className="ReceiptBodyItem">
          <p className="label">PickUp Date</p>
          <p className="value">{Receipt.humanReadableDate(this.order.pickup_date)}</p>
        </div>
        <div className="ReceiptBodyItem">
          <p className="label">Delivery Date</p>
          <p className="value">{Receipt.humanReadableDate(this.order.delivery_date)}</p>
        </div>
        <div className="ReceiptBodyItem">{this.renderOrderItems(receipt.items)}</div>
      </div>
    );
  };

  static humanReadableDate(millis) {
    return moment.unix(millis/1000).format('MMMM Do YYYY');
  }

  calculateTotalCost = (receipt) => {
    if (this.order.status === 'CANCELED') {
      return 'CANCELLED';
    }

    return (!receipt.total_amount_cents || receipt.total_amount_cents == 0)
      ? "PENDING"
      : Formatter.format(receipt.total_amount_cents / 100);
  };

  orderSummary = () => {
    switch(this.order.status.toUpperCase()) {
      case "PENDING":
        return `
          Your WashUp Valet will arrive on ${Receipt.humanReadableDate(this.order.pickup_date)}
          between 8-10pm to pick up your clothes. After your valet measures your clothes this receipt
          will be updated to show you the total cost of your order.
        `;
      case "PICKED_UP":
        return `
          Your WashUp Valet has picked up your clothes and our pros are busy at work cleaning them. Your clothes are
          expected to be delivered on ${Receipt.humanReadableDate(this.order.delivery_date)} between 8-10pm.
        `;
      case "DROPPED_OFF":
        return `
          Your clothes have been delivered and your bill of $250.56 will show up on your card statement
          in the next few days. Let us know if everything was to your liking at team@washup.io.
        `;
      case "BILLED":
        return `
          Your clothes have been delivered and your card has been billed $250.56. Hope you enjoyed using WashUp.
          Let us know if everything was to your liking at team@washup.io.
        `;
      case "CANCELED":
        return `Your order has been cancelled.`;
    }
  };

  loadReceipt = () => {
    const { receipts, getReceipt } = this.props;
    if (isEmpty(receipts.receipts[this.orderToken]) && this.order.status !== 'PENDING') {
      getReceipt(this.orderToken);
    }
  }
}

const mapStateToProps = (state) => {
  return {
    receipts: state.receipts || {},
    orders: state.orders
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    getReceipt: (orderToken) => dispatch(ReceiptActions.getReceipt(`#${orderToken}`))
  }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Receipt));